import React from 'react'
import useGenericHook from './GenericHook'

interface Platform{
    id: number;
    name: string;
    slug: string;
}
const usePlatform = () => useGenericHook<Platform>('/platforms/lists/parents');

export default usePlatform;