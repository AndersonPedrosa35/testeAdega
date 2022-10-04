import { useStaticQuery, graphql } from 'gatsby'
import draftToHtml from 'draftjs-to-html'
import './topbar.scss'

const TopBar = () => {
  const {
    cmsHeader: {
      topbar: {
        topbarText: { text },
      },
    },
  } = useStaticQuery(
    graphql`
      query Topbar {
        cmsHeader {
          topbar {
            topbarText {
              text
            }
          }
        }
      }
    `
  )

  if (!text) {
    return null
  }
  const html = draftToHtml(JSON.parse(text))

  if (html.length <= 8){
    return null
  }

  return (
    <div className="topbar w-full py-1">
      <div className="container">
        <div
          className="topbar__text"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export default TopBar