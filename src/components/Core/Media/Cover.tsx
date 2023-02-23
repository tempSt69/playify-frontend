type Cover = {
  src: string;
};

export const Cover = ({ src, ...props }: Cover) => {
  return (
    <div
      className='rounded-[50px] border-radius w-full aspect-square bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${src})` }}
      {...props}
    ></div>
  );
};
