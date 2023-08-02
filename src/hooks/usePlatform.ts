import useGenericHook from './GenericHook'

export interface Platform{
    id: number;
    name: string;
    slug: string;
}
const usePlatform = () => useGenericHook<Platform>('/platforms/lists/parents');

export default usePlatform;