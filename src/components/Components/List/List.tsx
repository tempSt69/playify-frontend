import { Song } from '../../../services/types/Song';
import { TypeListItem, ListItem } from './ListItem';

type List = {
  items: TypeListItem[];
  error: Error | null;
  loading: boolean;
};

export const List = ({
  items,
  error = null,
  loading = false,
  ...props
}: List) => {
  return (
    <div {...props} className={`py-3 rounded-3xl transition-colors`}>
      {error ? <div className='text-center'>{error.message}</div> : null}
      {!loading ? (
        items.map((item, key) => <ListItem key={key} {...item} />)
      ) : (
        <div className='flex items-center justify-center'>
          <div
            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid dark:border-white border-black border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
            role='status'
          >
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
              Loading...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
