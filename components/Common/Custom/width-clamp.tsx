interface Props
  extends React.PropsWithChildren,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  addClass?: string;
}

const WidthClamp: React.FC<Props> = (props) => {
  const { children, addClass, ...others } = props;
  return (
    <div className={`${addClass ?? ""} md:max-w-[1488px] mx-auto w-11/12`} {...others}>
      {children}
    </div>
  );
};

export default WidthClamp;
