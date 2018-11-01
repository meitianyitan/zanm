export default {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loadingTip: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  zvmContactCard: {
    addText: '添加联系人'
  },
  zvmContactList: {
    addText: '新建联系人'
  },
  zvmPagination: {
    prev: '上一页',
    next: '下一页'
  },
  zvmPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  zvmSubmitBar: {
    label: '合计：'
  },
  zvmCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: count => `您有 ${count} 个可用优惠`
  },
  zvmCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  zvmCouponItem: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: discount => `${discount}折`,
    condition: (condition) => `满${condition}元可用`
  },
  zvmAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  zvmAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  zvmAddressList: {
    add: '新增地址'
  }
};
