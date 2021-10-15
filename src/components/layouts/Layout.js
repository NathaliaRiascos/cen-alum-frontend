import { Layout } from 'antd';
import PropTypes from 'prop-types'
import {
    layout_header,
    layout_content,
    layout_footer
} from "components/templates/Step.module.css"

const { Header, Footer, Content } = Layout;

const LayoutSteps = ({ header, content, footer }) => (
  <Layout>
    <Header className={layout_header}>{header}</Header>
    <Content className={layout_content}>{content}</Content>
    {footer && <Footer className={layout_footer}>{footer}</Footer>} 
  </Layout>
)

LayoutSteps.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node
}

export default LayoutSteps