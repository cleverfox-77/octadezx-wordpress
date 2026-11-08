export interface OctaDezxWordPressConfig { workspaceId: string; }
export interface OctaDezxWordPressInstance {
  workspaceId: string;
  widgetScriptUrl: string;
  mcpEndpoint: string;
  docsUrl: string;
  attributionHtml: string;
}
export function initOctaDezxWordPress(config: OctaDezxWordPressConfig): OctaDezxWordPressInstance;
