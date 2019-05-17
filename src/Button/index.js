import { Button } from '@alifd/next';

const MyComponent = () => (
  <div>
    <Button type="normal">Normal</Button> &nbsp;&nbsp;
    <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
    <Button type="secondary">Secondary</Button>
    <br /><br />
    <Button type="normal" text>Normal</Button> &nbsp;&nbsp;
    <Button type="primary" text>Primary</Button> &nbsp;&nbsp;
    <Button type="secondary" text>Secondary</Button>
    <br /><br />
    <Button type="normal" warning>Normal</Button> &nbsp;&nbsp;
    <Button type="primary" warning>Primary</Button> &nbsp;&nbsp;
  </div>
);
export default MyComponent;