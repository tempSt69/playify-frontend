type Cover = {
  src: string;
};

export const Cover = ({ src, ...props }: Cover) => {
  return (
    <div
      className='rounded-3xl border-radius w-10/12 aspect-square bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${src})` }}
      {...props}
    ></div>
  );
};
