export {
    getIsErrorProfile,
    getProfileData,
    getProfileIsLoading,
    getProfileIsReadonly,
} from './model/selectors/profileSelectors'
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
export { profileActions } from './model/slice/profileSlice'
export { type IProfileSchema } from './model/types/profile'
export { type IProfile } from './model/types/profile'
export { ProfileCard } from './ui/ProfileCard'
