## Built-in Style
Zanm contains some common styles that can be used directly by the className.

### Text ellipsis
When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="zvm-ellipsis">
  This is a paragraph of 250px width limit, the back will be omitted.
</div>
```

### Hairline
Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="zvm-hairline--top"></div>

<!-- border bottom -->
<div class="zvm-hairline--bottom"></div>

<!-- border left -->
<div class="zvm-hairline--left"></div>

<!-- border right -->
<div class="zvm-hairline--right"></div>

<!-- border top & bottom -->
<div class="zvm-hairline--top-bottom"></div>

<!-- full border -->
<div class="zvm-hairline--surround"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="zvm-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide bottom -->
<transition name="zvm-slide-bottom">
  <div v-show="visible">Fade</div>
</transition>
```
