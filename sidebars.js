/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorial: [
    "intro",
    {
      type: "category",
      label: "入门",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "getting-started/prepare",
        {
          type: "category",
          label: "安装指南",
          link: {
            type: "generated-index",
          },
          items: [
            "getting-started/install/docker-compose",
            "getting-started/install/docker",
            "getting-started/install/1panel",
            "getting-started/install/helm",
            "getting-started/install/podman",
            "getting-started/install/jar-file",
            "getting-started/install/offline",
            "getting-started/install/config",
            {
              type: "category",
              label: "云平台",
              link: {
                type: "generated-index",
              },
              items: [
                "getting-started/install/cloud/alibaba-cloud-market",
                "getting-started/install/cloud/tencent-cloud-lighthouse",
                "getting-started/install/cloud/alibaba-cloud-computenest"
              ],
            },
            {
              type: "category",
              label: "其他指南",
              link: {
                type: "generated-index",
              },
              items: [
                "getting-started/install/other/nginxproxymanager",
                "getting-started/install/other/traefik",
              ],
            },
          ],
        },
        "getting-started/migrate-from-1.x",
        "getting-started/setup",
        "getting-started/first-post",
        // "getting-started/config",
        // "getting-started/upgrade",
        // "getting-started/downloads",
      ],
    },
    {
      type: "category",
      label: "用户指南",
      link: {
        type: "generated-index",
      },
      items: [
        "user-guide/common",
        "user-guide/user-center",
        "user-guide/posts",
        "user-guide/pages",
        "user-guide/attachments",
        "user-guide/menus",
        "user-guide/themes",
        "user-guide/plugins",
        "user-guide/app-store",
        "user-guide/users",
        "user-guide/settings",
        "user-guide/backup",
        "user-guide/faq",
      ],
    },
    {
      type: "category",
      label: "参与贡献",
      link: {
        type: "generated-index",
      },
      items: ["contribution/issue", "contribution/pr", "contribution/sponsor"],
    },
    "about",
  ],

  developer: [
    {
      type: "category",
      label: "系统开发",
      link: {
        type: "generated-index",
      },
      items: [
        // "developer-guide/core/structure",
        "developer-guide/core/prepare",
        "developer-guide/core/run",
        "developer-guide/core/build",
        "developer-guide/core/framework",
        // "developer-guide/core/code-style",
      ],
    },
    {
      type: "category",
      label: "插件开发",
      link: {
        type: "generated-index",
      },
      items: [
        "developer-guide/plugin/introduction",
        "developer-guide/plugin/prepare",
        "developer-guide/plugin/hello-world",
        "developer-guide/plugin/publish",
        {
          type: "category",
          label: "基础",
          link: {
            type: "generated-index",
          },
          items: [
            "developer-guide/plugin/basics/structure",
            "developer-guide/plugin/basics/manifest",
            "developer-guide/plugin/basics/devtools",
            {
              type: "category",
              label: "服务端",
              link: {
                type: "generated-index",
              },
              items: [
                "developer-guide/plugin/basics/server/lifecycle",
                "developer-guide/plugin/basics/server/object-management",
              ],
            },
            {
              type: "category",
              label: "UI",
              link: {
                type: "generated-index",
              },
              items: [
                "developer-guide/plugin/basics/ui/intro",
                "developer-guide/plugin/basics/ui/entry",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "API 参考",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "服务端",
              link: {
                type: "generated-index",
              },
              items: [
                "developer-guide/plugin/api-reference/server/extension",
                "developer-guide/plugin/api-reference/server/reconciler",
                "developer-guide/plugin/api-reference/server/extension-client",
                "developer-guide/plugin/api-reference/server/setting-fetcher",
                "developer-guide/plugin/api-reference/server/reverseproxy",
                "developer-guide/plugin/api-reference/server/finder-for-theme",
                "developer-guide/plugin/api-reference/server/template-for-theme",
                "developer-guide/plugin/api-reference/server/websocket",
                "developer-guide/plugin/api-reference/server/login-handler-enhancer",
                "developer-guide/plugin/api-reference/server/extension-getter",
              ],
            },
            {
              type: "category",
              label: "UI",
              link: {
                type: "generated-index",
              },
              items: [
                "developer-guide/plugin/api-reference/ui/route",
                "developer-guide/plugin/api-reference/ui/api-request",
                {
                  type: "category",
                  label: "组件",
                  link: {
                    type: "doc",
                    id: "developer-guide/plugin/api-reference/ui/components/index",
                  },
                  items: [
                    "developer-guide/plugin/api-reference/ui/components/uppy-upload",
                    "developer-guide/plugin/api-reference/ui/components/filter-dropdown",
                    "developer-guide/plugin/api-reference/ui/components/filter-clean-button",
                    "developer-guide/plugin/api-reference/ui/components/annotations-form",
                    "developer-guide/plugin/api-reference/ui/components/attachment-file-type-icon",
                    "developer-guide/plugin/api-reference/ui/components/attachment-selector-modal",
                    "developer-guide/plugin/api-reference/ui/components/has-permission",
                    "developer-guide/plugin/api-reference/ui/components/search-input",
                    "developer-guide/plugin/api-reference/ui/components/plugin-detail-modal",
                    "developer-guide/plugin/api-reference/ui/components/v-codemirror",
                    "developer-guide/plugin/api-reference/ui/components/v-tooltip",
                    "developer-guide/plugin/api-reference/ui/components/v-permission",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "扩展点和定制化",
          link: {
            type: "doc",
            id: "developer-guide/plugin/extension-points/server/index",
          },
          items: [
            {
              type: "category",
              label: "服务端",
              link: {
                type: "doc",
                id: "developer-guide/plugin/extension-points/server/index",
              },
              items: [
                "developer-guide/plugin/extension-points/server/additional-webfilter",
                "developer-guide/plugin/extension-points/server/authentication-webfilter",
                "developer-guide/plugin/extension-points/server/attachment",
                "developer-guide/plugin/extension-points/server/comment-subject",
                "developer-guide/plugin/extension-points/server/comment-widget",
                "developer-guide/plugin/extension-points/server/notifier",
                "developer-guide/plugin/extension-points/server/template-head-processor",
                "developer-guide/plugin/extension-points/server/template-footer-processor",
                "developer-guide/plugin/extension-points/server/post-content",
                "developer-guide/plugin/extension-points/server/singlepage-content",
                "developer-guide/plugin/extension-points/server/username-password-authentication-manager",
              ],
            },
            {
              type: "category",
              label: "UI",
              link: {
                type: "doc",
                id: "developer-guide/plugin/extension-points/ui/index",
              },
              items: [
                "developer-guide/plugin/extension-points/ui/attachment-selector-create",
                "developer-guide/plugin/extension-points/ui/editor-create",
                "developer-guide/plugin/extension-points/ui/plugin-self-tabs-create",
                "developer-guide/plugin/extension-points/ui/default-editor-extension-create",
                "developer-guide/plugin/extension-points/ui/comment-subject-ref-create",
                "developer-guide/plugin/extension-points/ui/backup-tabs-create",
                "developer-guide/plugin/extension-points/ui/plugin-installation-tabs-create",
                "developer-guide/plugin/extension-points/ui/theme-list-tabs-create",
                "developer-guide/plugin/extension-points/ui/post-list-item-operation-create",
                "developer-guide/plugin/extension-points/ui/comment-list-item-operation-create",
                "developer-guide/plugin/extension-points/ui/reply-list-item-operation-create",
                "developer-guide/plugin/extension-points/ui/plugin-list-item-operation-create",
                "developer-guide/plugin/extension-points/ui/backup-list-item-operation-create",
                "developer-guide/plugin/extension-points/ui/attachment-list-item-operation-create",
                "developer-guide/plugin/extension-points/ui/theme-list-item-operation-create",
                "developer-guide/plugin/extension-points/ui/plugin-list-item-field-create",
                "developer-guide/plugin/extension-points/ui/post-list-item-field-create",
                "developer-guide/plugin/extension-points/ui/user-detail-tabs-create",
                "developer-guide/plugin/extension-points/ui/uc-user-profile-tabs-create",
              ]
            },
          ]
        },
        {
          type: "category",
          label: "安全和权限管理",
          link: {
            type: "doc",
            id: "developer-guide/plugin/security/role-template",
          },
          items: [
            "developer-guide/plugin/security/rbac",
            "developer-guide/plugin/security/role-template",
            "developer-guide/plugin/security/ui-permission",
          ]
        },
        {
          type: "category",
          label: "案例和最佳实践",
          link: {
            type: "generated-index",
          },
          items: ["developer-guide/plugin/examples/todolist"],
        },
        // "developer-guide/plugin/appendices",
      ],
    },
    {
      type: "category",
      label: "主题开发",
      link: {
        type: "generated-index",
      },
      items: [
        "developer-guide/theme/prepare",
        "developer-guide/theme/config",
        "developer-guide/theme/structure",
        "developer-guide/theme/static-resources",
        "developer-guide/theme/settings",
        "developer-guide/theme/annotations",
        {
          type: "category",
          label: "模板编写",
          link: {
            type: "doc",
            id: "developer-guide/theme/template-variables",
          },
          items: [
            "developer-guide/theme/template-variables/index_",
            "developer-guide/theme/template-variables/post",
            "developer-guide/theme/template-variables/page",
            "developer-guide/theme/template-variables/archives",
            "developer-guide/theme/template-variables/tags",
            "developer-guide/theme/template-variables/tag",
            "developer-guide/theme/template-variables/categories",
            "developer-guide/theme/template-variables/category",
            "developer-guide/theme/template-variables/author",
            "developer-guide/theme/template-variables/auth",
            "developer-guide/theme/template-variables/error",
          ],
        },
        {
          type: "category",
          label: "Finder API",
          link: {
            type: "doc",
            id: "developer-guide/theme/finder-apis",
          },
          items: [
            "developer-guide/theme/finder-apis/category",
            "developer-guide/theme/finder-apis/tag",
            "developer-guide/theme/finder-apis/post",
            "developer-guide/theme/finder-apis/single-page",
            "developer-guide/theme/finder-apis/comment",
            "developer-guide/theme/finder-apis/contributor",
            "developer-guide/theme/finder-apis/menu",
            "developer-guide/theme/finder-apis/site-stats",
            "developer-guide/theme/finder-apis/theme",
            "developer-guide/theme/finder-apis/plugin",
          ],
        },
        "developer-guide/theme/image-optimization",
        "developer-guide/theme/global-variables",
        "developer-guide/theme/template-tag",
        "developer-guide/theme/code-snippets",
      ],
    },
    {
      type: "category",
      label: "RESTful API",
      link: {
        type: "generated-index",
      },
      items: [
        "developer-guide/restful-api/introduction",
        "developer-guide/restful-api/api-client",
      ],
    },
    "developer-guide/form-schema",
    "developer-guide/annotations-form",
  ],
};
