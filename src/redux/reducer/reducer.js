let initialstate = {
  contactList: [], // 이 배열에다가 연락처들을 모아놓을것
  searchName:"",
  starredContacts: [], // 즐겨찾기된 연락처의 이름을 저장할 배열
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
      case 'REMOVE_CONTACT':
      return {
        ...state,
        contactList: state.contactList.filter((contact) => contact.name !== payload.name), // 버튼을 누른 아이템과, 현재 list에 있는 item이 다른 것들만 추출해라 즉 버튼 누른것은 삭제된것
      };
      case 'SEARCHNAME':
        return { ...state, searchName: payload.searchName };
        case 'TOGGLE_STAR':
          return {
            ...state,
            starredContacts: state.starredContacts.includes(payload.name)
              ? state.starredContacts.filter(name => name !== payload.name)
              : [...state.starredContacts, payload.name],
          };
        default : 
        return {...state};
  } //...state.contactList array에 있는 값은 유지를 하되, name과 phoneNumber값을 가져옴
}

export default reducer;
