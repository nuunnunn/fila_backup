import { configureStore, createSlice, current } from '@reduxjs/toolkit';

let tab = createSlice({
  name: 'tab',
  initialState: {value: 0},
  reducers:{
    chTab(state, action){
      state.value = action.payload
    }
  }
})


let user = createSlice({
  name: 'user',
  initialState: {value:'누리'},
  reducers: {
    changeName(state){
      state.value = '고객'
    }
  }
})


let cart = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 0,
      name: '모터코어 컬러블럭 패딩자켓',
      price: 239000,
      imgUrl: '/img/motorcore1.jpg',
      code: `1100FS2JKF4S01FDRD`,
      count: 1
    },{
      id: 2,
      name: '모터코어 컬러블럭 우븐팬츠',
      price: 159000,
      imgUrl: '/img/motorcore3.jpg',
      code: `1100FS2WPF3S01FBLK`,
      count: 1
    }
  ],
  reducers:{
    addCount(state, action){
      let num = state.findIndex(a => a.id == action.payload)
      state[num].count++
    },
    
    minusCount(state, action){
      let num = state.findIndex(a => a.id == action.payload)
      state[num].count--

      if(state[num].count < 1){
        alert('최소 주문수량은 1개입니다.')
        state[num].count = 1
      }
    },

    deleteItem(state, action){
      let num = state.findIndex(a => a.id == action.payload)
      alert(`${state[num].name} 상품을 삭제하시겠습니까?`)
      state.splice(num,1)
    },
    
    addItem(state, action){   
      let num = state.findIndex(a => a.id == action.payload.id) 
      let stateId = action.payload.id
      if(stateId === 0 || stateId === 2){
        if(action.payload.id === state[num].id){
          state[num].count++
        }
      }else{
        state.push(action.payload)
      }
    }
  }
})


export let {chTab} = tab.actions
export let {changeName} = user.actions
export let {addCount, minusCount, deleteItem, addItem} = cart.actions

export default configureStore({
  reducer: {
    tab : tab.reducer,
    user: user.reducer,
    cart: cart.reducer
  }
})