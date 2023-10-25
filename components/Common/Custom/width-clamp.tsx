interface Props
  extends React.PropsWithChildren,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const WidthClamp: React.FC<Props> = (props) => {
  const { children, ...others } = props;
  return (
    <div className="md:max-w-[1288px] mx-auto w-11/12" {...others}>
      {children}
    </div>
  );
};

export default WidthClamp;
