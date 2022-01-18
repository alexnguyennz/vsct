const fs = require("fs");
const markdownIt = require("markdown-it");
const htmlmin = require("html-minifier");
const pluginSeo = require("eleventy-plugin-seo");
const seoData = require("./_data/seo.json");
const pluginRss = require("@11ty/eleventy-plugin-rss");

//  ELEVENTY-IMG 
const Image = require("@11ty/eleventy-img");
const path = require("path");


// CUSTOM ELEVENTY-IMG FILENAMES
const filenameFormat = function (id, src, width, format, options) {
  const extension = path.extname(src);
  const name = path.basename(src, extension);

  return `${name}-${width}.${format}`;
}

// ELEVENTY-IMG OPTIONS
const imageOptions = {
  widths: [600, 1440],
  formats: ["webp", "jpeg"],
  outputDir: "./_site/img/",
  sizes: "100vw",
  filenameFormat,
  fallbackWidth: 100,
  cacheOptions: {
    duration: "1d", // if a remote image URL, this is the amount of time before it fetches a fresh copy
    directory: ".cache", // project-relative path to the cache directory
    removeUrlQueryParams: false,
  },
}

// GENERATE OPTIMISED IMAGES
function imageShortcode(src, alt, sizes, className) {

  const newSrc = "." + src; // add . to find local file

  try {
    Image(newSrc, imageOptions); // transform image 
    metadata = Image.statsSync(newSrc, imageOptions); // grab metadata synchronously
  } catch (error) {
    // console.log('Image not processed, error: ', error);
  }

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    class: className
  };

  return Image.generateHTML(metadata, imageAttributes);
}

// RETURN ONLY OPTIMISED IMAGE URL
function imageUrlShortcode(src) {

  const newSrc = "." + src; // add . to find local file

  let data;

  try {
    Image(newSrc, imageOptions); // transform image 
    metadata = Image.statsSync(newSrc, imageOptions); // grab metadata synchronously
    
    data = metadata.webp[metadata.webp.length - 1];
  } catch (error) {
    // console.log('Image not processed, error: ', error);
  }

  return data.url;
}


module.exports = function (eleventyConfig) {

    // GENERATE POST EXCERPTS grid-post-summary.njk
	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: function (file, options) {
			file.excerpt = file.content.split('\n').join(' ');
		}
	});


    // PASSTHROUGH COPY / WATCH TARGETS
    eleventyConfig.addPassthroughCopy({
        "_public": "_public",
        "uploads": "uploads",
        "js": "js",
        "node_modules/@splidejs/splide/dist/js/splide.min.js": "js/splide.min.js",
        "node_modules/@splidejs/splide/dist/css/themes/splide-sea-green.min.css": "css/splide-sea-green.min.css",
        "node_modules/ionicons/dist/ionicons/ionicons.esm.js": "js/ionicons.esm.js",
        "node_modules/ionicons/dist/ionicons/ionicons.js": "js/ionicons.js",
        "auth-routes.txt": "auth-routes.txt",
        "robots.txt": "robots.txt",
        "guide.pdf": "guide.pdf"
    });
    eleventyConfig.addWatchTarget("css");


    // SHORTCODES
    eleventyConfig.addNunjucksShortcode("button", (text, url, colour, hoverColour, full) => {
        return `<p class="text-center mb-0"><a class="text-gray-50" href="${url}"><button class="button font-semibold ${colour} hover:${hoverColour} ${full}">${text}</button></a></p>`;
    });

    eleventyConfig.addNunjucksShortcode("readMoreButton", (text, url, colour, hoverColour, full) => {
        return `<p class="text-center mb-0"><a class="text-gray-50" href="${url}" aria-label="Read more about this programme Do Some Good"><button class="button font-semibold ${colour} hover:${hoverColour} ${full}">${text}</button></a></p>`;
    });

    eleventyConfig.addNunjucksShortcode("year", () => `${new Date().getFullYear()}`); // get current year
    eleventyConfig.addNunjucksShortcode("image", imageShortcode);
    eleventyConfig.addNunjucksShortcode("imageUrl", imageUrlShortcode);

    eleventyConfig.addNunjucksFilter("getVar", function(varName) { // obtain variables with spaces between them - Nunjucks doesn't allow this by default
        return this.getVariables()[varName];
    });


    // COLLECTIONS
    eleventyConfig.addCollection('trustMembers', function (collection) {
        return collection.getFilteredByGlob("trust/**/*.md")
            .sort((a, b) => a.data.order - b.data.order);
	});

    eleventyConfig.addCollection('planned', function (collection) {
        return collection.getFilteredByGlob("timeline/Planned/**/*.md")
            .sort((a, b) => a.data.order - b.data.order);
	});

    eleventyConfig.addCollection('accomplished', function (collection) {
        return collection.getFilteredByGlob("timeline/Accomplished/**/*.md")
            .sort((a, b) => a.data.order - b.data.order);
	});
    
    const publishedPosts = (post) => post.data.published;
    eleventyConfig.addCollection("posts", (collection) => { 
        return collection.getFilteredByGlob("posts/**/*.md")
            .filter(publishedPosts); 
    });


	// 404 ROUTING
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
          ready: function(err, bs) {
    
            bs.addMiddleware("*", (req, res) => {
              const content_404 = fs.readFileSync('_site/404/index.html');
              // Add 404 http status code in request header.
              res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
              // Provides the 404 content without redirect.
              res.write(content_404);
              res.end();
            });
          }
        }
    });


    // HTML MINIFIER
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if ( outputPath && outputPath.endsWith(".html") ) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
          });
          return minified;
        }
    
        return content;
    });


    // FILTERS/PLUGINS
    eleventyConfig.setDataDeepMerge(true); // defaults to true in Eleventy 1.0

    // RENDER MARKDOWN IN TRUST
    eleventyConfig.addFilter("md", function (content = "") {
        return markdownIt({ html: true }).render(content);
    });
  
  // date.toLocaleDateString
	eleventyConfig.addFilter('postDate', (date) => date ? new Date(date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' }) : '');
	eleventyConfig.addFilter('jsonify', (obj) => obj ? JSON.stringify(obj) : null);
	eleventyConfig.addFilter('getCollectionItemBySlug', (collection, slug) => collection.find((item) => slug === item.fileSlug));

  eleventyConfig.addPlugin(pluginSeo, seoData);
  eleventyConfig.addPlugin(pluginRss);
    
};
