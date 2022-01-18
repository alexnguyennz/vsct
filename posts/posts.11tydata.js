module.exports =
{
	"layout": "layouts/post.njk",
	"tags": "posts",
	"permalink": "/news/{{ page.fileSlug }}/",
    "_inputs": {
        "date": {
          "type": "date"
        },
        "authorTrustMember": {
          "type": "select",
          "options": {
            "allow_empty": false
          }
        }
    },
	"background_image_path": "/uploads/building.jpg",
	"large_header": false,
	"_options": {
		"tags": {
			"hidden": true
		},
		"layout": {
			"hidden": true
		},
		"permalink": {
			"hidden": true
		}
	}
};