import { NewsArticle } from './NewsArticle';
import { withRouter } from 'storybook-addon-remix-react-router';


export default {
  title: 'NewsArticle',
  component: NewsArticle,
  decorators: [
    withRouter,
    (Story) => (
      <div style={{ border: '1px solid red' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
}

const Template = (arg) => <NewsArticle {...arg} />

export const NewsArticleStory = Template.bind({})

NewsArticleStory.args = {
  name: 'row name',
  text: "I was wondering if after all these years you'd like to meet",
  title: "Hello, it's me"
}
