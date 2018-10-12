export default {
  name: '姓名',
  tel: '電話',
  save: '保存',
  confirm: '確認',
  cancel: '取消',
  delete: '刪除',
  complete: '完成',
  loadingTip: '加載中...',
  telEmpty: '請填寫電話',
  nameEmpty: '請填寫姓名',
  confirmDelete: '確定要刪除麽',
  telInvalid: '請填寫正確的電話',
  zanContactCard: {
    addText: '添加聯系人'
  },
  zanContactList: {
    addText: '新建聯系人'
  },
  zanPagination: {
    prev: '上一頁',
    next: '下一頁'
  },
  zanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...'
  },
  zanSubmitBar: {
    label: '合計：'
  },
  zanCouponCell: {
    title: '優惠券',
    tips: '使用優惠',
    count: count => `您有 ${count} 個可用優惠`
  },
  zanCouponList: {
    empty: '暫無優惠券',
    exchange: '兌換',
    close: '不使用優惠',
    enable: '可使用優惠券',
    disabled: '不可使用優惠券',
    placeholder: '請輸入優惠碼'
  },
  zanCouponItem: {
    valid: '有效期',
    unlimited: '無使用門檻',
    discount: discount => `${discount}折`,
    condition: (condition) => `滿${condition}元可用`
  },
  zanAddressEdit: {
    area: '地區',
    postal: '郵政編碼',
    areaEmpty: '請選擇地區',
    addressEmpty: '請填寫詳細地址',
    postalEmpty: '郵政編碼格式不正確',
    defaultAddress: '設為默認收貨地址',
    telPlaceholder: '收貨人手機號',
    namePlaceholder: '收貨人姓名',
    areaPlaceholder: '選擇省 / 市 / 區'
  },
  zanAddressEditDetail: {
    label: '詳細地址',
    placeholder: '街道門牌、樓層房間號等信息'
  },
  zanAddressList: {
    add: '新增地址'
  }
};
