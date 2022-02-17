interface ReactMarkdownProps {
  children: string;
}

const ReactMarkdown: React.FC<ReactMarkdownProps> = ({
  children,
}: ReactMarkdownProps) => <div>{children}</div>;

export default ReactMarkdown;
