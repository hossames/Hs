import { configureStore,UserReducer } from "../exporter";

export const Store = configureStore({
    reducer: {
        user: UserReducer,
    },
});