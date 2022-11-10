import { createSlice } from "@reduxjs/toolkit"

export type Picture = {
    artist:{
        image:string,
        name:string
    },
    description:string,
    name:string,
    images:{
        gallery:string,
        hero:{
            large:string,
            small:string
        },
        thumbnail:string
    }
    source:string,
    year:number
}

const initialState: {items:Picture[];show:boolean} = {
    items:[], 
    show:false,
}

const galleryListSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        fetchGalleriaList: (state,action) => {
            state.items = action.payload
        },
        changeSHowStatus: (state) => {
            state.show = !state.show
        }
    },
  })

export const galleryListReducer = galleryListSlice.reducer;
export const  galleryListActions = galleryListSlice.actions;