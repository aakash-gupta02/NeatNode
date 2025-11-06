import { useMDXComponents as getMDXComponents } from 'next-mdx-import-source-file'
import { Cards } from 'nextra/components'
import { getIndexPageMap, getPageMap } from 'nextra/page-map'


export const OverviewPage = async ({ filePath, icons = {}, pageMap: $pageMap } = {}) => {
  const { h2: H2 } = getMDXComponents()

  if (!filePath && !$pageMap) {
    console.error('OverviewPage requires either `filePath` or `pageMap`')
    return null
  }

  

  const currentRoute = filePath ? filePath.replace('app', '').replace('/page.mdx', '') : undefined
  const pageMap = $pageMap ?? (await getPageMap(currentRoute))

  const index = getIndexPageMap(pageMap)

  return index.map((pageItem, idx) => {
    if (!Array.isArray(pageItem)) {
      console.log(`Rendering heading: ${pageItem.title}`);
      return <H2 key={idx}>{pageItem.title}</H2>
    }

    return (
      <Cards key={idx}>
        {pageItem.map(item => {
          const rawIcon = item.frontMatter?.icon
          let Icon

          // Support three frontMatter patterns:
          // - string keys that map to the `icons` prop (try a few common variants)
          // - already-provided React components (if somehow present)
          // - undefined / missing
          if (typeof rawIcon === 'string') {
            // try direct key, key + 'Icon', and capitalized variant
            Icon =
              icons?.[rawIcon] ??
              icons?.[`${rawIcon}Icon`] ??
              icons?.[rawIcon.charAt(0).toUpperCase() + rawIcon.slice(1)] ??
              undefined
          } else if (rawIcon && (typeof rawIcon === 'function' || typeof rawIcon === 'object')) {
            // rawIcon might already be a React component (handle gracefully)
            Icon = rawIcon
          } else {
            Icon = undefined
          }

          if (rawIcon && !Icon) {
            // Log a warning instead of throwing so the docs site doesn't crash
            // eslint-disable-next-line no-console
            console.warn(
              `Icon "${rawIcon}" is defined in front matter for ${item.name} but isn't provided via the 'icons' prop.`
            )
          }

          return (
            // @ts-expect-error -- Card props are dynamic from nextra
            <Cards.Card
              key={item.name}
              title={item.title}
              href={item.route || item.href}
              icon={Icon ? <Icon /> : undefined}
            />
          )
        })}
      </Cards>
    )
  })
}