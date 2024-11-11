import { MarketRow } from "./MarketRow";
import { withRouter } from 'storybook-addon-remix-react-router';

export default {
  title: 'MarketRow',
  component: MarketRow,
  decorators: [withRouter],
}

const Template = (arg) => <MarketRow {...arg} />

export const Default = Template.bind({})

Default.args = {
  name: 'row name',
}




