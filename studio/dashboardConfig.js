export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '629117992fda41006cba3b43',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-txiwjjep',
                  apiId: '44e54342-9398-4dff-b0a5-14de046f036b'
                },
                {
                  buildHookId: '629117993322a80b1df9982d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-susq1uvc',
                  apiId: 'fd12c86d-cb65-4c84-9a9f-23553d55cfb8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HTECH-THUI/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-susq1uvc.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
