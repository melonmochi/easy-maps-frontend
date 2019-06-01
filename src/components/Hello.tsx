import * as React from "react";
import { Button } from 'antd';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <div>
    <Button type="primary">Primary</Button>
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
</div>;