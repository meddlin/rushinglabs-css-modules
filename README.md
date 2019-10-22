## CSS/SCSS Modules

A basic demonstration for how to get started using CSS modules in a React application. Using SCSS for managing styles with this pattern is also covered.

Created with [create-react-app](https://github.com/facebook/create-react-app).

<hr />

*This repo was created to supplement a video for my [RushingLabs](https://www.youtube.com/channel/UCMbD6urmMQBUUxjjvyXgaxw) Youtube channel.*

[<img src="https://meddlin-web.s3.us-east-2.amazonaws.com/video-thumbnails/css-modules/1566721062761_20190825034449357.jpg" width="720" height="405">](https://www.youtube.com/watch?v=XLUaq8Qhx_w)

[https://www.youtube.com/watch?v=XLUaq8Qhx_w](https://www.youtube.com/watch?v=XLUaq8Qhx_w)

<hr />

### Explanation: CSS

Next to your component file, create `MyComponent.module.css`. 

*The `'module'` in the filename is **key**.*

```bash
touch MyComponent.module.css
```

Include these styles...

```css
.specialDisplay {
	display: flex;
	flex-direction: column;
}
```

Inside of `MyComponent`, include your new stylesheet, and now you're able to "dot-into" the class names.

```js
import styles from './MyComponent.module.css';

function MyComponent() {
	return(
		<div className={styles.specialDisplay}>
			<span>from </span>
			<span>the </span>
			<span>MyComponent </span>
			<span>component</span>
		</div>
	);
}
```

### Explanation: SCSS

First, install the `node-sass` npm package in your project.

```bash
npm install --save node-sass
```

And now, it's exact same steps as above except we can take full advantage of SCSS.

```bash
touch MyComponent.module.scss
```

```scss
$gray: lightgray;

.specialDisplay {
	display: flex;
    flex-direction: column;
    background-color: $gray;
}
```

```js
import styles from './MyComponent.module.scss';

function MyComponent() {
	return(
		<div className={styles.specialDisplay}>
			<span>from </span>
			<span>the </span>
			<span>MyComponent </span>
			<span>component</span>
		</div>
	);
}
```