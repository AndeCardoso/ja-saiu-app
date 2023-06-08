import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Navigators, SignedInScreens, SignedOffScreens } from '@routes/screens';

export interface FormInputs {
  search: string;
}

export const useLoginScreen = () => {
  const { navigate, replace } = useNavigation<any>();
  const { control, handleSubmit, getValues } = useForm<FormInputs>({
    defaultValues: {
      search: '',
    },
  });

  const onSearch = async () => {
    const { search } = getValues();
    if (search) {
      console.log(search);
    }
  };

  return {
    control,
    onSearch,
  };
};
