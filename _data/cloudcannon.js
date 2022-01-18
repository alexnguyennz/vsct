module.exports = {
  timezone: "en-NZ",
  _editables: {
    "content": {
      "link": true,
      "blockquote": true,
      "bold": true,
      "italic": true,
      "strike": false,
      "subscript": false,
      "superscript": false,
      "underline": true,
      "bulletedlist": true,
      "indent": false,
      "numberedlist": true,
      "outdent": false,
      "embed": false,
      "image": true,
      "undo": false,
      "redo": false,
      "removeformat": false,
      "copyformatting": false,
      "styles": "/css/editor.css",
      "left": "align-left",
      "center": "align-center",
      "right": "align-right"
    }
  },
    collections: {
        pages: {
            path: 'pages',
            title: 'Pages',
            output: true,
            filter: 'strict',
            _inputs: {
                'title': {
                    'label': 'Page Title'
                },
                'bannerImage': {
                    'comment': 'Wide images work best'
                }
            },
            _add_options: []
        },
        posts: {
            path: 'posts',
            _inputs: {
                'date': {
                    'type': 'date'
                },
                'authorTrustMember': {
                    'type': 'select',
                    'label': 'Author',
                    'options': {
                        'allow_empty': false
                    }
                },
                'image': {
                    'label': 'Post Image'
                },
                'tags': {
                    'comment': 'Categories e.g. Do Some Good, Take 10'
                },
                'published': {
                    'comment': 'Untick and save to make this post a draft'
                },
            }
        },
        doSomeGood: {
            path: 'programmes/dosomegood',
            _inputs: {
                'location': {
                    'comment': 'E.g. Newtown, Wellington'
                },
                "tamariki": {
                    'comment': 'E.g. 60'
                },
                'partnerDate': {
                    'type': 'text',
                    'comment': 'Partnership date e.g. June 2021'
                },
                'sponsorImage': {
                    'label': 'Sponsor Logo Image',
                    'comment': 'Optional - if the school is individually sponsored'
                },
                'sponsorUrl': {
                    'comment': "Optional - link to the sponsor's website"
                },
                'testimonialName': {
                    'label': 'Name',
                    'comment': 'Name and position e.g. Leigh Keown, Operations Coordinator'
                },
                'testimonialDescription': {
                    'label': 'Description'
                }
            },
            title: 'Do Some Good',
            _add_options: [
                {
                    name: 'Add School',
                    href: 'cloudcannon:data/programmes/dosomegood/Schools/.md🆕'
                },
                {
                    name: 'Add Testimonial',
                    href: 'cloudcannon:data/programmes/dosomegood/Testimonials/.md🆕'
                },
                {
                    name: 'Add Gallery Photo',
                    href: 'cloudcannon:data/programmes/dosomegood/Gallery/.md🆕'
                },
                {
                    name: 'Add Sponsor',
                    href: 'cloudcannon:data/programmes/dosomegood/Sponsors/.md🆕'
                },
                {
                    name: 'Add Supporter',
                    href: 'cloudcannon:data/programmes/dosomegood/Supporters/.md🆕'
                },
            ]
        },
        take10: {
            path: 'programmes/take10',
            _inputs: {
                'testimonialName': {
                    'label': 'Name',
                    'comment': 'Name and position e.g. Leigh Keown, Operations Coordinator'
                },
                'testimonialDescription': {
                    'label': 'Description'
                }
            },
            title: 'Take 10',
            _add_options: [
                {
                    name: 'Add Testimonial',
                    href: 'cloudcannon:data/programmes/take10/Testimonials/.md🆕'
                },
                {
                    name: 'Add Gallery Photo',
                    href: 'cloudcannon:data/programmes/take10/Gallery/.md🆕'
                },
                {
                    name: 'Add Sponsor',
                    href: 'cloudcannon:data/programmes/take10/Sponsors/.md🆕'
                }
            ]
        },
        take10Arvos: {
            path: 'programmes/take10-arvos',
            _inputs: {
                'testimonialName': {
                    'label': 'Name',
                    'comment': 'Name and position e.g. Leigh Keown, Operations Coordinator'
                },
                'testimonialDescription': {
                    'label': 'Description'
                }
            },
            title: "Take 10 Arvo's",
            _add_options: [
                {
                    name: 'Add Testimonial',
                    href: 'cloudcannon:data/programmes/take10-arvos/Testimonials/.md🆕'
                },
                {
                    name: 'Add Gallery Photo',
                    href: 'cloudcannon:data/programmes/take10-arvos/Gallery/.md🆕'
                },
                {
                    name: 'Add Sponsor',
                    href: 'cloudcannon:data/programmes/take10-arvos/Sponsors/.md🆕'
                }
            ]
        },
        take10Queenstown: {
            path: 'programmes/take10-queenstown',
            _inputs: {
                'testimonialName': {
                    'label': 'Name',
                    'comment': 'Name and position e.g. Leigh Keown, Operations Coordinator'
                },
                'testimonialDescription': {
                    'label': 'Description'
                }
            },
            title: 'Take 10 Queenstown',
            _add_options: [
                {
                    name: 'Add Testimonial',
                    href: 'cloudcannon:data/programmes/take10-queenstown/Testimonials/.md🆕'
                },
                {
                    name: 'Add Gallery Photo',
                    href: 'cloudcannon:data/programmes/take10-queenstown/Gallery/.md🆕'
                },
                {
                    name: 'Add Sponsor',
                    href: 'cloudcannon:data/programmes/take10-queenstown/Sponsors/.md🆕'
                }
            ]
        },
        genLink: {
            path: 'programmes/gen-link',
            _inputs: {
                'testimonialName': {
                    'label': 'Name',
                    'comment': 'Name and position e.g. Leigh Keown, Operations Coordinator'
                },
                'testimonialDescription': {
                    'label': 'Description'
                }
            },
            title: 'Generation Link',
            _add_options: [
                {
                    name: 'Add Testimonial',
                    href: 'cloudcannon:data/programmes/gen-link/Testimonials/.md🆕'
                },
                {
                    name: 'Add Gallery Photo',
                    href: 'cloudcannon:data/programmes/gen-link/Gallery/.md🆕'
                },
                {
                    name: 'Add Sponsor',
                    href: 'cloudcannon:data/programmes/gen-link/Sponsors/.md🆕'
                }
            ]
        },
        trustMembers: {
            path: 'trust',
            _inputs: {
                'position': {
                    'comment': 'E.g. Trustee'
                },
                'image': {
                    'label': 'Profile Image'
                },
                'order': {
                    'comment': 'Order of members on vsctrust.org.nz/trust'
                }
            },
            _sort_key: 'order',
        },
        timeline: {
            path: 'timeline',
            title: 'Timelines',
            _add_options: [
                {
                    name: 'Add Accomplished Milestone',
                    href: 'cloudcannon:data/timeline/Accomplished/.md🆕'
                },
                {
                    name: 'Add Planned Milestone',
                    href: 'cloudcannon:data/timeline/Planned/.md🆕'
                },
                {
                    name: 'Add Media Mention',
                    href: 'cloudcannon:data/timeline/Media/.md🆕'
                }
            ],
            _inputs: {
                'title': {
                    'comment': 'Title of milestone or article e.g. Partner with more schools'
                },
                'url': {
                    'comment': 'Link to the article or webpage'
                },
                'timelineDate': {
                    'type': 'text',
                    'comment': 'Date of the milestone or article e.g. June 2022'
                },
                'date': {
                    'type': 'date',
                    'label': 'Timeline Date'
                },
                'order': {
                    'comment': 'Order of items on vsctrust.org.nz/who-we-are'
                }
            },
        },
        data: {
            path: '_data',
        }
    },

    _collection_groups: [
        {
            heading: 'Pages',
            collections: [ 'pages' ]
        },
        {
            heading: 'News',
            collections: [ 'posts' ]
        },
        {
            heading: 'Programmes',
            collections: [ 'doSomeGood', 'take10', 'take10Arvos', 'take10Queenstown', 'genLink' ]
        },
        {
            heading: 'Other',
            collections: [ 'trustMembers', 'timeline' ]
        }
    ]
};