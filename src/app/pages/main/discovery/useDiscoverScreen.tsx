import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { mockAnimeList } from 'app/mocks/animeList';

export interface FormInputs {
  search: string;
}

export const useDiscoverScreen = () => {
  const [listState, setListState] = useState(mockAnimeList);
  const { control, handleSubmit, getValues } = useForm<FormInputs>({
    defaultValues: {
      search: '',
    },
    mode: 'onChange',
  });

  const onSearch = () => {
    const { search } = getValues();
    if (search.length > 0) {
      setListState(mockAnimeList.filter((item) => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
    } else {
      setListState(mockAnimeList);
    }
  };

  return {
    control,
    onSearch,
    handleSubmit,
    discoverList: listState,
  };
};
