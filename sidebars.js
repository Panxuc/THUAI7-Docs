const sidebars = {
    docs: [
        {
            type: "category",
            label: "规则",
            link: {
                type: "generated-index",
            },
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "引入",
                    collapsed: true,
                    items: [
                        "intro/README",
                        "intro/rule",
                        "intro/programming",
                    ],
                },
                {
                    type: "category",
                    label: "地图",
                    collapsed: true,
                    items: [
                        "map/map",
                        "map/placetype",
                        "map/home",
                        "map/wormhole",
                    ],
                },
                {
                    type: "category",
                    label: "舰船",
                    collapsed: true,
                    items: [
                        "ship/ship",
                        "ship/civilship",
                        "ship/warship",
                        "ship/flagship",
                    ],
                },
                {
                    type: "category",
                    label: "建筑",
                    collapsed: true,
                    items: [
                        "construction/construction",
                    ],
                },
                {
                    type: "category",
                    label: "攻击",
                    collapsed: true,
                    items: [
                        "attack/attack",
                    ],
                },
                {
                    type: "category",
                    label: "得分",
                    collapsed: true,
                    items: [
                        "score/score",
                    ],
                },
                {
                    type: "category",
                    label: "细则",
                    collapsed: true,
                    items: [
                        "detail/detail",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "常见问题",
            link: {
                type: "generated-index",
            },
            collapsed: true,
            items: [
                "faq/README",
                "faq/cpptips",
            ],
        },
    ],
};

module.exports = sidebars;
