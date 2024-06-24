export interface RouteConfig {
  path: string;
  name: string;
  exact: boolean;
  component: React.ComponentType<any>;
}
