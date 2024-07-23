let initialstate = {
  contactList: [], // 이 배열에다가 연락처들을 모아놓을것
};

function reducer(state = initialstate, action) {
  const {type, payload} = action; // 이렇게하면 action.type 이걸 type으로 짧게 줄일 수 있다. payload도 마찬가지
  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      }; //
      default : 
        return {...state};
  } //...state.contactList array에 있는 값은 유지를 하되, name과 phoneNumber값을 가져옴
}

export default reducer;
