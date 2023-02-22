import { useState } from 'react';
import { TypeListItem, ListItem } from './ListItem';

type List = {
  items: Array<TypeListItem>;
  activeId: string;
};

export const List = ({ items, activeId, ...props }: List) => {
  return (
    <div {...props} className={`px-5 py-3 rounded-3xl transition-colors`}>
      {items.map((item, key) => (
        <ListItem key={key} {...{ ...item, active: activeId === item._id }} />
      ))}
    </div>
  );
};
