
export default {
  namespace: 'allList',
  state: {
    tableList:[
      {
        num:1,
        time:'11-03-2017',
        theory:"90",
        skill:'Success',
        desc:'对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
        flag:'是',
        btns:[{
          type:'change',
          title:'编辑'
        },{
          type:'delete',
          title:'删除'
        }]
      },
      {
        num:2,
        time:'11-03-2017',
        theory:"90",
        skill:'Success',
        desc:'对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
        flag:'是',
        btns:[{
          type:'change',
          title:'编辑'
        },{
          type:'delete',
          title:'删除'
        }]
      },
      {
        num:3,
        time:'11-03-2017',
        theory:"90",
        skill:'Success',
        desc:'对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
        flag:'是',
        btns:[{
          type:'change',
          title:'编辑'
        },{
          type:'delete',
          title:'删除'
        }]
      },
      {
        num:4,
        time:'11-03-2017',
        theory:"90",
        skill:'Success',
        desc:'对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
        flag:'是',
        btns:[{
          type:'change',
          title:'编辑'
        },{
          type:'delete',
          title:'删除'
        }]
      },
      {
        num:5,
        time:'11-03-2017',
        theory:"90",
        skill:'Success',
        desc:'对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和',
        flag:'是',
        btns:[{
          type:'change',
          title:'编辑'
        },{
          type:'delete',
          title:'删除'
        }]
      }
    ]
  },
  effects: {
    
  },
  reducers: {
    allList(state, action) {
      return {...state,tableList:{...state.tableList}}
    },
    deleteList(state,action){
      let index=state.tableList.findIndex(item=>item.num===action.num)
      state.tableList.splice(index,1);
      return {...state,tableList:{...state.tableList}}
    }
  }
}