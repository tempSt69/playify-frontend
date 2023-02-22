type Cover = {
  src: string;
};

export const Cover = ({ src, ...props }: Cover) => {
  return (
    <div
      className='rounded-3xl border-radius w-full aspect-square bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${src})` }}
      {...props}
    ></div>
  );
};
