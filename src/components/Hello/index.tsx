import * as React from 'react';
import { Button } from 'antd';
import './style';

interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = (props: HelloProps) => (
  <div>
    <Button className="hello-button" type="primary">
      Primary
    </Button>
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  </div>
);

export default Hello;
