import * as React from 'react';
import { Button } from 'antd';

interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = (props: HelloProps) => (
  <div>
    <Button type="primary">Primary</Button>
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  </div>
);

export default Hello;
