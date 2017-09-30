<template>
  <div v-show="$store.state.globalVisible">
    <mt-button @click.native="handleClick('tab-toast')" :type="active==='tab-toast'?'primary':'default'">{{ $t('toast')
      }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-indicator')" :type="active==='tab-indicator'?'primary':'default'">
      {{ $t('indicator') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-loadMore')" :type="active==='tab-loadMore'?'primary':'default'">
      {{ $t('loadMore') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-infiniteScroll')"
               :type="active==='tab-infiniteScroll'?'primary':'default'">{{ $t('infiniteScroll') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-messageBox')" :type="active==='tab-messageBox'?'primary':'default'">
      {{ $t('messageBox') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-actionSheet')" :type="active==='tab-actionSheet'?'primary':'default'">
      {{ $t('actionSheet') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-popup')" :type="active==='tab-popup'?'primary':'default'">{{ $t('popup')
      }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-swipe')" :type="active==='tab-swipe'?'primary':'default'">{{ $t('swipe')
      }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-lazyLoad')" :type="active==='tab-lazyLoad'?'primary':'default'">
      {{ $t('lazyLoad') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-range')" :type="active==='tab-range'?'primary':'default'">{{ $t('range')
      }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-progress')" :type="active==='tab-progress'?'primary':'default'">
      {{ $t('progress') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-picker')" :type="active==='tab-picker'?'primary':'default'">
      {{ $t('picker') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-datetimePicker')"
               :type="active==='tab-datetimePicker'?'primary':'default'">{{ $t('datetimePicker') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-indexList')" :type="active==='tab-indexList'?'primary':'default'">
      {{ $t('indexList') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-paletteButton')"
               :type="active==='tab-paletteButton'?'primary':'default'">{{ $t('paletteButton') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-header')" :type="active==='tab-header'?'primary':'default'">
      {{ $t('header') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-tabBar')" :type="active==='tab-tabBar'?'primary':'default'">
      {{ $t('tabBar') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-navBar')" :type="active==='tab-navBar'?'primary':'default'">
      {{ $t('navBar') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-button')" :type="active==='tab-button'?'primary':'default'">
      {{ $t('button') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-cell')" :type="active==='tab-cell'?'primary':'default'">{{ $t('cell')
      }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-cellSwipe')" :type="active==='tab-cellSwipe'?'primary':'default'">
      {{ $t('cellSwipe') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-spinner')" :type="active==='tab-spinner'?'primary':'default'">
      {{ $t('spinner') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-tabContainer')" :type="active==='tab-tabContainer'?'primary':'default'">
      {{ $t('tabContainer') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-search')" :type="active==='tab-search'?'primary':'default'">
      {{ $t('search') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-witch')" :type="active==='tab-witch'?'primary':'default'">{{ $t('witch')
      }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-checkList')" :type="active==='tab-checkList'?'primary':'default'">
      {{ $t('checkList') }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-radio')" :type="active==='tab-radio'?'primary':'default'">{{ $t('radio')
      }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-field')" :type="active==='tab-field'?'primary':'default'">{{ $t('field')
      }}
    </mt-button>
    <mt-button @click.native="handleClick('tab-badge')" :type="active==='tab-badge'?'primary':'default'">{{ $t('badge')
      }}
    </mt-button>
    <mt-button @click.native="locale(lang === 'zh-cn' ? 'en' : 'zh-cn')">{{lang === 'zh-cn' ? '变为English' : '变为简体中文'}}
    </mt-button>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-toast">
        <mt-cell title="基本">
          <mt-button @click.native="toastClick(1)">预览</mt-button>
        </mt-cell>
        <mt-cell title="底部+持续5秒">
          <mt-button @click.native="toastClick(2)">预览</mt-button>
        </mt-cell>
        <mt-cell title="带图标">
          <mt-button @click.native="toastClick(3)">预览</mt-button>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-indicator">
        <mt-cell title="基本">
          <mt-button @click.native="indicatorClick(1)">预览</mt-button>
        </mt-cell>
        <mt-cell title="显示文本">
          <mt-button @click.native="indicatorClick(2)">预览</mt-button>
        </mt-cell>
        <mt-cell title="别的效果">
          <mt-button @click.native="indicatorClick(3)">预览</mt-button>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-loadMore">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
                     :auto-fill="autoFill"
                     ref="loadmore">
          <mt-cell v-for="item in list" :key="item.id" :title="`item: ${item.value}`">
          </mt-cell>
        </mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-infiniteScroll">
        <div
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <mt-cell v-for="item in list2" :key="item.id" :title="`item: ${item.value}`">
          </mt-cell>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-messageBox">
        <mt-cell title="基本">
          <mt-button @click.native="messageBoxClick(1)">预览</mt-button>
        </mt-cell>
        <mt-cell title="确认">
          <mt-button @click.native="messageBoxClick(2)">预览</mt-button>
        </mt-cell>
        <mt-cell title="输入">
          <mt-button @click.native="messageBoxClick(3)">预览</mt-button>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-actionSheet">
        <mt-cell title="基本">
          <mt-button @click.native="actionSheetClick(1)">预览</mt-button>
        </mt-cell>
        <mt-cell title="不带取消按钮">
          <mt-button @click.native="actionSheetClick(2)">预览</mt-button>
        </mt-cell>
        <mt-actionsheet
          :actions="actions"
          :cancelText="cancelText"
          v-model="sheetVisible">
        </mt-actionsheet>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-popup">
        <mt-cell title="基本">
          <mt-button @click.native="popupClick(1)">预览</mt-button>
        </mt-cell>
        <mt-cell title="上方滑出">
          <mt-button @click.native="popupClick(2)">预览</mt-button>
        </mt-cell>
        <mt-cell title="下方滑出">
          <mt-button @click.native="popupClick(3)">预览</mt-button>
        </mt-cell>
        <mt-cell title="左方滑出">
          <mt-button @click.native="popupClick(4)">预览</mt-button>
        </mt-cell>
        <mt-cell title="右方滑出">
          <mt-button @click.native="popupClick(5)">预览</mt-button>
        </mt-cell>
        <mt-popup
          v-model="popupVisible"
          popup-transition="popup-fade">
          <div style="background: #fff;width: 300px;height: 200px;">
            淡入淡出
          </div>
        </mt-popup>
        <mt-popup
          v-model="popupVisible2"
          position="top"
          style="top:50%;background: none;">
          <div style="background: #fff;width: 300px;height: 200px;position:relative;top:-100px;">
            上方滑出
          </div>
        </mt-popup>
        <mt-popup
          v-model="popupVisible3"
          position="bottom"
          style="top:50%;background: none;">
          <div style="background: #fff;width: 300px;height: 200px;position:relative;top:-100px;">
            下方滑出
          </div>
        </mt-popup>
        <mt-popup
          v-model="popupVisible4"
          position="left"
          style="left:50%;background: none;">
          <div style="background: #fff;width: 300px;height: 200px;position: relative;left:-150px;">
            左方滑出
          </div>
        </mt-popup>
        <mt-popup
          v-model="popupVisible5"
          position="right"
          style="left:50%;background: none;">
          <div style="background: #fff;width: 300px;height: 200px;position: relative;left:-150px;">
            右方滑出
          </div>
        </mt-popup>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-swipe">
        <mt-cell title="基本">
        </mt-cell>
        <mt-swipe :auto="2000">
          <mt-swipe-item class="is-active">1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <mt-cell title="隐藏指示器">
        </mt-cell>
        <mt-swipe :show-indicators="false">
          <mt-swipe-item class="is-active">1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <mt-cell title="取消自动播放">
        </mt-cell>
        <mt-swipe :auto="0">
          <mt-swipe-item class="is-active">1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <mt-cell title="设置默认页">
        </mt-cell>
        <mt-swipe :auto="5000" :defaultIndex="1">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item class="is-active">2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-lazyLoad">
        <div v-for="item in imgs">
          <img v-lazy.tab-lazyLoad="item">
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-range" class="tab-range" style="padding-bottom: 5px;">
        <mt-cell-swipe>
          <div slot="title">
            <span class="mint-cell-text">基本</span>
            <span class="mint-cell-label">value:{{rangeValue}}</span>
          </div>
          <mt-range v-model="rangeValue">
            <div slot="start">0</div>
            <div slot="end">100</div>
          </mt-range>
        </mt-cell-swipe>
        <mt-cell-swipe>
          <div slot="title">
            <span class="mint-cell-text">定义步长</span>
            <span class="mint-cell-label">value:{{rangeValue}}</span>
          </div>
          <mt-range v-model="rangeValue" :step="10">
            <div slot="start">0</div>
            <div slot="end">100</div>
          </mt-range>
        </mt-cell-swipe>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-progress" class="tab-progress">
        <mt-cell title="基本">
        </mt-cell>
        <mt-progress :value="60">
        </mt-progress>
        <mt-cell title="两头带字">
        </mt-cell>
        <mt-progress :value="60">
          <div slot="start">0%</div>
          <div slot="end">100%</div>
        </mt-progress>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-picker">
        <mt-cell title="基本">
        </mt-cell>
        <mt-picker :slots="slots" @change="onValuesChange" ref="picker1"></mt-picker>
        <mt-cell title="年月">
        </mt-cell>
        <mt-picker :slots="slots2" @change="onValuesChange" ref="picker2"></mt-picker>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-datetimePicker">
        <mt-cell title="基本">
          <mt-button @click.native="datetimePickerClick(1)">预览</mt-button>
        </mt-cell>
        <mt-datetime-picker
          ref="pickerBase"
          type="datetime"
          v-model="pickerDateTime">
        </mt-datetime-picker>
        <mt-cell title="日期">
          <mt-button @click.native="datetimePickerClick(2)">预览</mt-button>
        </mt-cell>
        <mt-datetime-picker
          ref="pickerDate"
          type="date"
          v-model="pickerDate">
        </mt-datetime-picker>
        <mt-cell title="时间">
          <mt-button @click.native="datetimePickerClick(3)">预览</mt-button>
        </mt-cell>
        <mt-datetime-picker
          ref="pickerTime"
          type="time"
          v-model="pickerTime">
        </mt-datetime-picker>
        <mt-cell title="自定义模板">
          <mt-button @click.native="datetimePickerClick(4)">预览</mt-button>
        </mt-cell>
        <mt-datetime-picker
          ref="pickerSelf"
          type="date"
          v-model="pickerDate"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日">
        </mt-datetime-picker>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-indexList">
        <mt-index-list :height="300">
          <mt-index-section index="A">
            <mt-cell title="Aaron"></mt-cell>
            <mt-cell title="Alden"></mt-cell>
            <mt-cell title="Austin"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="Baldwin"></mt-cell>
            <mt-cell title="Braden"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="Cman"></mt-cell>
            <mt-cell title="Cman2"></mt-cell>
          </mt-index-section>
          <mt-index-section index="D">
            <mt-cell title="Dman"></mt-cell>
            <mt-cell title="Dman2"></mt-cell>
          </mt-index-section>
          <mt-index-section index="E">
            <mt-cell title="Eman"></mt-cell>
            <mt-cell title="Eman2"></mt-cell>
          </mt-index-section>
          <mt-index-section index="F">
            <mt-cell title="Fman"></mt-cell>
            <mt-cell title="Fman2"></mt-cell>
          </mt-index-section>
          <mt-index-section index="G">
            <mt-cell title="..."></mt-cell>
            <mt-cell title="..."></mt-cell>
            <mt-cell title="..."></mt-cell>
            <mt-cell title="..."></mt-cell>
          </mt-index-section>
          <mt-index-section index="H">
            <mt-cell title="..."></mt-cell>
            <mt-cell title="..."></mt-cell>
            <mt-cell title="..."></mt-cell>
            <mt-cell title="..."></mt-cell>
          </mt-index-section>
          <mt-index-section index="Z">
            <mt-cell title="Zack"></mt-cell>
            <mt-cell title="Zane"></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-paletteButton" style="padding-top: 100px;">
        <mt-palette-button content="点我">
          <div class="my-icon-button"></div>
          <div class="my-icon-button"></div>
          <div class="my-icon-button"></div>
        </mt-palette-button>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-header">
        <mt-header fixed title="固定在顶部"></mt-header>
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-header title="多个按钮">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
            <mt-button @click="handleClose">关闭</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-header title="左侧仅我文字">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>
        <mt-header title="分享">
          <mt-button slot="right">分享</mt-button>
        </mt-header>
        <mt-header title="仅图标">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-tabBar">
        <mt-tabbar v-model="selected" :fixed="true">
          <mt-tab-item id="1">
            <img slot="icon" src="http://lorempixel.com/100/120/sports/">
            外卖
          </mt-tab-item>
          <mt-tab-item id="2">
            <img slot="icon" src="http://lorempixel.com/120/100/sports/">
            订单
          </mt-tab-item>
          <mt-tab-item id="3">
            <img slot="icon" src="http://lorempixel.com/150/100/sports/">
            发现
          </mt-tab-item>
          <mt-tab-item id="4">
            <img slot="icon" src="http://lorempixel.com/100/150/sports/">
            我的
          </mt-tab-item>
        </mt-tabbar>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-navBar">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">选项一</mt-tab-item>
          <mt-tab-item id="2">选项二</mt-tab-item>
          <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" style="text-align: center;line-height: 50px;">
            1
          </mt-tab-container-item>
          <mt-tab-container-item id="2" style="text-align: center;line-height: 50px;">
            2
          </mt-tab-container-item>
          <mt-tab-container-item id="3" style="text-align: center;line-height: 50px;">
            3
          </mt-tab-container-item>
        </mt-tab-container>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-button">
        <mt-cell title="改变颜色">
        </mt-cell>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <mt-cell title="改变大小">
        </mt-cell>
        <mt-button size="small">small</mt-button>
        <mt-button size="large">large</mt-button>
        <mt-button size="normal">normal</mt-button>
        <mt-cell title="禁用按钮">
        </mt-cell>
        <mt-button disabled>disabled</mt-button>
        <mt-cell title="幽灵按钮">
        </mt-cell>
        <mt-button plain>plain</mt-button>
        <mt-cell title="带图标">
        </mt-cell>
        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">更多</mt-button>
        <mt-cell title="自定义图标">
        </mt-cell>
        <mt-button>
          <img src="http://lorempixel.com/100/100/sports/" height="20" width="20" slot="icon">
          带自定义图标
        </mt-button>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-cell">
        <mt-cell title="基本" style="font-weight: bold">
        </mt-cell>
        <mt-cell title="标题文字"></mt-cell>
        <mt-cell title="标题文字" value="说明文字"></mt-cell>
        <mt-cell title="可点击的链接" style="font-weight: bold">
        </mt-cell>
        <mt-cell
          title="标题文字"
          to="//github.com"
          is-link
          value="带链接">
        </mt-cell>
        <mt-cell title="带图标" style="font-weight: bold">
        </mt-cell>
        <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
        <mt-cell title="带自定义图标" style="font-weight: bold">
        </mt-cell>
        <mt-cell title="标题文字">
          <span>icon 是图片</span>
          <img slot="icon" src="http://lorempixel.com/200/200/sports/" width="24" height="24">
        </mt-cell>
        <mt-cell title="自定义内容" style="font-weight: bold">
        </mt-cell>
        <mt-cell title="标题文字" is-link>
          <span style="color: green">这里是元素</span>
        </mt-cell>
        <mt-cell title="带备注信息" style="font-weight: bold">
        </mt-cell>
        <mt-cell title="标题" label="描述信息" is-link></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-cellSwipe">

        <!--<mt-cell-swipe title="标题文字"-->
        <!--style="position: relative"-->
        <!--:v-if="false"-->
        <!--:right="[{key:1,content: 'Delete',style: {background: 'red', color: '#fff'}}]"></mt-cell-swipe>-->

        <mt-cell-swipe title="标题文字2"
                       style="position: relative"
        ></mt-cell-swipe>


      </mt-tab-container-item>
      <mt-tab-container-item id="tab-spinner">
        <mt-cell title="指定类型">
        </mt-cell>
        <mt-spinner type="snake"></mt-spinner>
        <mt-spinner type="double-bounce"></mt-spinner>
        <mt-spinner type="triple-bounce"></mt-spinner>
        <mt-spinner type="fading-circle"></mt-spinner>
        <mt-cell title="指定颜色">
        </mt-cell>
        <mt-spinner color="#26a2ff"></mt-spinner>
        <mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
        <mt-spinner color="yellow"></mt-spinner>
        <mt-cell title="指定尺寸">
        </mt-cell>
        <mt-spinner :size="60"></mt-spinner>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-tabContainer">
        <mt-cell title="就是现在通过按钮切换demo那样切换">
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-search">
        <mt-cell title="基本">
        </mt-cell>
        <!--<mt-search v-model="search" :result="getResult" :show="false" :autofocus="false"-->
        <!--placeholder="尝试输入'1'/'2'/'3'"></mt-search>-->
        <!--<mt-cell title="自定义搜索结果">-->
        <!--</mt-cell>-->
        <mt-search v-model="search" :show="false" :autofocus="false" placeholder="尝试输入'1'/'2'/'3'">
          <mt-cell
            v-for="item in getResult"
            :title="item.title"
            :value="item.value"
            :key="item.value">
          </mt-cell>
        </mt-search>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-witch">
        <mt-cell title="基本">
          <mt-switch v-model="value"></mt-switch>
        </mt-cell>

        <mt-cell title="带显示内容">
          <mt-switch v-model="value">开关</mt-switch>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-checkList">

        <mt-checklist
          title="复选框列表"
          v-model="valueList"
          :options="['选项A', '选项B', '选项C']">
        </mt-checklist>

        <mt-checklist
          title="禁用选项"
          v-model="valueList"
          :options="options">
        </mt-checklist>

        <mt-checklist
          title="最大可选数2"
          :max="2"
          v-model="valueList2"
          :options="options2">
        </mt-checklist>

        <mt-checklist
          align="right"
          title="右对齐"
          v-model="valueList"
          :options="options">
        </mt-checklist>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-radio">
        <mt-radio
          title="单选框列表"
          v-model="ckbValue"
          :options="['选项A', '选项B', '选项C']">
        </mt-radio>

        <mt-radio
          title="禁用选项"
          v-model="ckbValue"
          :options="options3">
        </mt-radio>

        <mt-radio
          align="right"
          title="右对齐"
          v-model="ckbValue"
          :options="options3">
        </mt-radio>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-field">
        <mt-cell title="基本" style="font-weight: bold"></mt-cell>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="model2"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="model2"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="model2"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="model2"></mt-field>
        <mt-field label="网站" placeholder="请输入网址" type="url" v-model="model2"></mt-field>
        <mt-field label="数字" placeholder="请输入数字" type="number" v-model="model2"></mt-field>
        <mt-field label="生日" placeholder="请输入生日" type="date" v-model="model2"></mt-field>
        <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="model2"></mt-field>
        <mt-cell title="校验状态" style="font-weight: bold"></mt-cell>
        <mt-field label="邮箱" type="email" state="success" v-model="model2"></mt-field>
        <mt-field label="邮箱" type="email" state="error" v-model="model2"></mt-field>
        <mt-field label="邮箱" type="email" state="warning" v-model="model2"></mt-field>
        <mt-cell title="添加验证码" style="font-weight: bold"></mt-cell>
        <mt-field label="验证码" v-model="model2">
          <img src="http://lorempixel.com/200/100/sports/" height="45px" width="100px">
        </mt-field>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-badge">
        <mt-cell title="基本"></mt-cell>
        <mt-badge size="small">30</mt-badge>
        <mt-badge size="normal">10</mt-badge>
        <mt-badge size="large">10</mt-badge>
        <mt-cell title="指定类型"></mt-cell>
        <mt-badge type="primary">30</mt-badge>
        <mt-badge type="error">10</mt-badge>
        <mt-badge type="success">10</mt-badge>
        <mt-badge type="warning">10</mt-badge>
        <mt-cell title="指定颜色"></mt-cell>
        <mt-badge size="small" color="#888">自定义颜色</mt-badge>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  // 引入全部组件
  import Vue from 'vue';

  //  import Mint from 'mint-ui';
  // 按需引入部分组件
  import {
    Button,
    Cell,
    TabContainer,
    TabContainerItem,
    Loadmore,
    InfiniteScroll,
    Actionsheet,
    Popup,
    Swipe,
    SwipeItem,
    Lazyload,
    Range,
    CellSwipe,
    Progress,
    Picker,
    DatetimePicker,
    IndexList,
    IndexSection,
    PaletteButton,
    Header,
    Tabbar,
    TabItem,
    Navbar,
    Spinner,
    Search,
    Switch,
    Checklist,
    Radio,
    Field,
    Badge,
    //无需Vue.component
    Toast,
    Indicator,
    MessageBox
  } from 'mint-ui';
  //  } from '~/plugins/mint-ui';

  import VueI18n from 'vue-i18n'
  import VueCookie from 'vue-cookie'
  import en from '~/lang/en'
  import zh from '~/lang/zh-CN'

  Vue.use(VueCookie)
  Vue.use(VueI18n)
  //  Vue.use(Mint);
  Vue.component(Button.name, Button)
  Vue.component(Cell.name, Cell)
  Vue.component(TabContainer.name, TabContainer)
  Vue.component(TabContainerItem.name, TabContainerItem)
  Vue.component(Loadmore.name, Loadmore)
  Vue.use(InfiniteScroll)
  Vue.component(Actionsheet.name, Actionsheet)
  Vue.component(Popup.name, Popup)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.use(Lazyload, {
    loading: require('~/assets/loading-spin.svg'),
    attempt: 3
  })
  Vue.component(Range.name, Range)

  Vue.component(Progress.name, Progress)
  Vue.component(Picker.name, Picker)
  Vue.component(DatetimePicker.name, DatetimePicker)
  Vue.component(IndexList.name, IndexList)
  Vue.component(IndexSection.name, IndexSection)
  Vue.component(PaletteButton.name, PaletteButton)
  Vue.component(Header.name, Header)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(Navbar.name, Navbar)
  Vue.component(CellSwipe.name, CellSwipe)
  Vue.component(Spinner.name, Spinner)
  Vue.component(Search.name, Search)
  Vue.component(Switch.name, Switch)
  Vue.component(Checklist.name, Checklist)
  Vue.component(Radio.name, Radio)
  Vue.component(Field.name, Field)
  Vue.component(Badge.name, Badge)

  Vue.config.lang = 'zh-cn'

  Vue.locale('zh-cn', zh)
  Vue.locale('en', en)

  export default {
    name: 'index',
//    components: {},
    data() {
      return {
        lang: 'zh-cn',
        active: 'tab-cellSwipe',
        list: [],
        list2: [],
        allLoaded: false,
        autoFill: false,
        actions: [{
          name: '菜单一',
          method: function () {
            console.log('菜单一')
          }
        }, {
          name: '菜单二',
          method: function () {
            console.log('菜单二')
          }
        }],
        sheetVisible: false,
        cancelText: '取消',
        popupVisible: false,
        popupVisible2: false,
        popupVisible3: false,
        popupVisible4: false,
        popupVisible5: false,
        imgs: [
          'http://lorempixel.com/300/100/sports/',
          'http://lorempixel.com/300/200/sports/',
          'http://lorempixel.com/300/250/sports/',
          'http://lorempixel.com/300/400/sports/'
        ],
        rangeValue: 56,
        slots: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            defaultIndex: 0
          }
        ],
        slots2: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right',
            defaultIndex: 0
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot3',
            textAlign: 'left',
            defaultIndex: 0
          }
        ],
        pickerDateTime: new Date(),
        pickerDate: new Date(),
        pickerTime: '10:15',
        selected: '1',
        cellSwipe: [{
          content: 'Delete',
          style: {background: 'red', color: '#fff'},
          handler: () => this.$messagebox('delete')
        }],
        search: '',
//        result: ['1', '2', '3'],
        result: [{title: '结果1', value: ''}, {title: '结果2', value: ''}, {title: '结果3', value: ''}, {
          title: '结果4',
          value: ''
        }],
        value: '',
        valueList: ['选中禁用的值'],
        valueList2: [],
        options: [
          {
            label: '被禁用',
            value: '值F',
            disabled: true
          },
          {
            label: '选中禁用',
            value: '选中禁用的值',
            disabled: true
          },
          {
            label: '选项A',
            value: '值A'
          },
          {
            label: '选项B',
            value: '值B'
          },
          {
            label: '选项C',
            value: '值C'
          }
        ],
        options2: [
          {
            label: '被禁用',
            value: '值F',
            disabled: true
          },
          {
            label: '选中禁用',
            value: '选中禁用的值',
            disabled: true
          },
          {
            label: '选项A',
            value: '值A'
          },
          {
            label: '选项B',
            value: '值B'
          },
          {
            label: '选项C',
            value: '值C'
          }
        ],
        ckbValue: '选项A',
        options3: [
          {
            label: '被禁用',
            value: '值F',
            disabled: true
          },
          {
            label: '选项A',
            value: '值A'
          },
          {
            label: '选项B',
            value: '值B'
          },
          {
            label: '选项C',
            value: '值C'
          }
        ],
        model1: {},
        model2: ''
      }
    },
    mounted: function () {
      //服务器渲染报错, 需要放在这里
//      Vue.component(CellSwipe.name, CellSwipe)

      var self = this
//      self.$cookie.delete('locale')
      var lang = self.$cookie.get('locale')
      if (lang) {
        Vue.config.lang = lang
        self.lang = lang
      } else {
        console.log(Vue.config.lang)
        self.$cookie.set('locale', Vue.config.lang)
        self.lang = Vue.config.lang
      }
      self.$store.commit('globalShow')

      for (let i = 10; i >= 1; i--) {
        self.list.push({
          id: i,
          value: i.toString()
        })
      }
      for (let i = 1; i <= 10; i++) {
        self.list2.push({
          id: i,
          value: i.toString()
        })
      }
      self.autoFill = true
    },
    methods: {
      locale: function (name) {
        var self = this
        debugger
        Vue.config.lang = name
        self.lang = name
        debugger
        self.$cookie.set('locale', name)
      },
      handleClick: function (id) {
        var self = this
        self.active = id

        if (id === 'tab-picker') {
          setTimeout(function () {
            self.$refs.picker1.setSlotValue(0, '2015-01')
            self.$refs.picker2.setSlotValue(0, '2015-01')
            self.$refs.picker2.setSlotValue(1, '2015-01')
          }, 1000)
        } else if (id === 'tab-cellSwipe') {
          //服务器渲染报错, 需要放在这里
//          Vue.component(CellSwipe.name, CellSwipe)
        } else {

        }
      },
      toastClick: function (type) {
        switch (type) {
          case 1:
            Toast('提示信息')
            break
          case 2:
            Toast({
              message: '提示',
              position: 'bottom',
              duration: 5000
            })
            break
          case 3:
            Toast({
              message: '操作成功',
              iconClass: 'iconfont icon-menu'
            })
            break
          default:
            break
        }
      },
      indicatorClick: function (type) {
        switch (type) {
          case 1:
            Indicator.open()
            setTimeout(function () {
              Indicator.close();
            }, 1000)
            break
          case 2:
            Indicator.open('加载中...')
            setTimeout(function () {
              Indicator.close();
            }, 1000)
            break
          case 3:
            Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
            })
            setTimeout(function () {
              Indicator.close();
            }, 1000)
            break
          default:
            break
        }
      },
      loadTop: function () {
        var self = this
        if (self.list.length >= 30) {
          self.$refs.loadmore.onTopLoaded();
        } else {
          var temp = []
          var start = self.list.length + 10
          var end = self.list.length
          for (let i = start; i >= end + 1; i--) {
            temp.push({
              id: i,
              value: i.toString()
            })
          }
          setTimeout(function () {
            self.list = [...temp, ...self.list]
            self.$refs.loadmore.onTopLoaded();
          }, 2000)
        }
      },
      loadBottom: function () {
        //只能在手机上看到效果
        var self = this
        if (self.list.length >= 30) {
          self.allLoaded = true;
          self.$refs.loadmore.onBottomLoaded();
        } else {
          var temp = []
          var start = self.list.length + 10
          var end = self.list.length
          for (let i = start; i >= end + 1; i--) {
            temp.push({
              id: i,
              value: i.toString()
            })
          }
          setTimeout(function () {
            self.list = [...self.list, ...temp]
            self.$refs.loadmore.onBottomLoaded();
          }, 2000)
        }
      },
      loadMore: function () {
        var self = this
//        Indicator.open()
        setTimeout(function () {
          var start = self.list2.length + 1
          var end = self.list2.length + 10
          for (let i = start; i <= end; i++) {
            self.list2.push({
              id: i,
              value: i.toString()
            })
          }
          Indicator.close()
        }, 1000)
      },
      messageBoxClick: function (type) {
        switch (type) {
          case 1:
            MessageBox('提示', '操作成功')
            break
          case 2:
            MessageBox.confirm('确定执行此操作?').then(action => {
              console.log('确定')
            }).catch(function () {
              console.log('取消')
            })
            break
          case 3:
            MessageBox.prompt('请输入姓名').then(({value, action}) => {
              console.log(value)
            }).catch(function () {
              console.log('取消')
            })
            break
          default:
            break
        }
      },
      actionSheetClick: function (type) {
        var self = this
        switch (type) {
          case 1:
            self.sheetVisible = true
            self.cancelText = '取消'
            break
          case 2:
            self.sheetVisible = true
            self.cancelText = ''
            break
          default:
            break
        }
      },
      popupClick: function (type) {
        var self = this
        switch (type) {
          case 1:
            self.popupVisible = true
            break
          case 2:
            self.popupVisible2 = true
            break
          case 3:
            self.popupVisible3 = true
            break
          case 4:
            self.popupVisible4 = true
            break
          case 5:
            self.popupVisible5 = true
            break
          default:
            break
        }
      },
      onValuesChange(picker, values) {

      },
      datetimePickerClick(type) {
        var self = this
        switch (type) {
          case 1:
            self.$refs.pickerBase.open()
            break
          case 2:
            self.$refs.pickerDate.open()
            break
          case 3:
            self.$refs.pickerTime.open()
            break
          case 4:
            self.$refs.pickerSelf.open()
            break
          default:
            break
        }
      },
      handleClose: function () {

      },
      test: function () {

      }
    },
    computed: {
      getResult: function () {
        var self = this
        return self.result.filter((item) => {
          return new RegExp(this.search, 'i').test(item.title)
        })
      }
    }
  }
</script>

<style lang="scss">
  .mint-swipe {
    height: 200px;
  }

  .mint-swipe-item {
    line-height: 200px;
    text-align: center;
    color: #fff;
    &:nth-child(1) {
      background: green;
      /*display: block;*/
      /*transform: translateX(0);*/
    }
    &:nth-child(2) {
      background: blue;
    }
    &:nth-child(3) {
      background: purple;
    }
  }

  .mint-tab-container-item {
    img[lazy] {
      width: 300px;
      height: 300px;
      margin: auto;
      display: block;
      position: relative;
      z-index: 1;
    }
    img[lazy=loading] {
      background: black;
    }
  }

  .tab-range, .tab-progress {
    .mint-cell-value {
      flex: 2.5 1 0%
    }
  }

  .mt-range, .mt-progress {
    width: 100%
  }

  .mint-palette-button {
    font-size: 12px;
    color: #fff;
    .my-icon-button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #26a2ff;
      color: #fff;
      line-height: 30px;
      text-align: center;
    }
    &.expand {
      .my-icon-button {
        &:nth-child(1) {
          transform: translate(-0.00px, -80.00px) rotate(720deg);
          transition-delay: 0s;
        }
        &:nth-child(2) {
          transform: translate(56.57px, -56.57px) rotate(720deg);
          transition-delay: 0.03s;
        }
        &:nth-child(3) {
          transform: translate(80.00px, -0.00px) rotate(720deg);
          transition-delay: 0.06s;
        }
      }
    }
  }
</style>