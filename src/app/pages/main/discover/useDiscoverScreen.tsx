import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { mockAnimeList } from 'app/mocks/animeList';

export interface FormInputs {
  search: string;
}

export const useDiscoverScreen = () => {
  const [listState, setListState] = useState(mockAnimeList);
  const { control, handleSubmit, getValues, watch } = useForm<FormInputs>({
    defaultValues: {
      search: '',
    },
  });

  const onSearch = async () => {
    const { search } = getValues();
    if (search) {
      setListState(mockAnimeList.filter((item) => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
    } else {
      setListState(mockAnimeList);
    }
  };

  useEffect(() => {
    onSearch();
  }, [watch('search')]);

  return {
    control,
    onSearch,
    handleSubmit,
    discoverList: listState,
  };
};
