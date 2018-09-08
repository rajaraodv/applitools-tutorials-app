---
sidebarDepth: 1
---
# Selenium JavaScript

This quickstart has 6 parts with lot of gifs and pictures to help you quickly get upto speed and know how powerful Applitools' AI really is. Not that it will take about 20 minutes after you install the code. 

::: tip Note

The tutorial may feel like a long one but it's mainly because of all the gifs and pictures. Our objective is to quickly show you how powerful and useful AI can be in automation testing.
:::

- Part 1 - 🚀 Setup Applitools and create a baseline

- Part 2 - 🐞 Find UI bugs and analyze differences using AI

- Part 3 - 🤖 Understand why Applitools AI is superior to pixel-by-pixel comparison

- Part 4 -  ✅ Accepting 100s of changes by clicking a button instead of updating numerous tests

- Part 5 -  👁 Use advanced AI tools to work with real-world scenarios

- Part 6 - 🔥 Code highlights

- Part 7 -  🎉 Congratulations!


## Part 1 - Setup environment and create a baseline

**Test Overview:**

In this part you will set up the environment to run the test locally and then store a baseline images of just the login page. We will use the app page later on.

Login page:
<img src="/login.png" alt="login page" />

App page:
<img src="/app.png" alt="App page" />

#### Step 1.1: Install Pre-requisits

1. Create Applitools account create it now to obtain your API key

2. Please set the `APPLITOOLS_API_KEY` environment variable

    - On Mac: `export APPLITOOLS_API_KEY='YOUR_API_KEY'`

    - On windows: `set APPLITOOLS_API_KEY='YOUR_API_KEY'`

3. Install node.js from [https://nodejs.org​](https://nodejs.org​)

4. Install git from [https://git-scm.com​](https://git-scm.com​)

5. Install Google Chrome browser from [https://www.google.com/chrome/](https://www.google.com/chrome/)

6. Install Chromedriver for node.js `$ npm install chromedriver`

#### Step 1.2 Download the demo project

1.Clone the repo: `git clone https://github.com/rajaraodv/Applitools-Selenium-JS-Quickstart`

2. Go to `Applitools-Selenium-JS-Quickstart` folder


#### Step 1.3 Run your first test
1. Run `$ npm test part1`

You should see the test run in a Chrome browser window.

::: tip Potential Problems and their solutions
1. You may see an error that says Chrome driver is not found. This means that either the Chrome driver is not downloaded or it is in your `PATH`. If you simply type `chromedriver` and if you see unknown command then `chromedriver` is not in your `PATH`.
2. You may see an error that says "Could not set Viewport". This means that your computer monitor's viewport size is smaller than what the test app is using. If so, open the `testSelector.js` and reduce `viewPortWidth` and `viewPortHeight`. Keep reducing until it's smaller than your monitor's size.

```js {9,10}

//testSelector.js
let testsToRun = {
  url: baseUrl,
  appName: "Demo app",
  windowName: "Login Page",
  testName: "Login Page",
  goto2ndPage: false,
  viewportWidth: 800, //<-- Reduce this to 600
  viewportHeight: 750 //<-- Reduce this to 600
};
```
:::

#### Step 1.3: Check the baseline
Login to [applitools.com](https://applitools.com) and see the results. Applitools app should show the results like below.

<img src="/baseline11.png" alt="Baseline 1" />

::: tip

1. Click on the "Refresh" icon if you don't see anything

2. The "Thumbs up" icon is used to accept the image as a baseline

3. The "save" button is used to save a new baseline image 


:::

PS: The initial run is automatically accepted as a baseline.



## Part 2 - Find UI bugs and analyze differences using AI
In this part you'll run the tests again but the test will use a different url to simulate a broken UI.

#### Step 2.1: Run the test again
Go to your command line and type the following command. It will test the login page (version 2) again and store the result in Applitools.

`$ npm test part2`

​
#### Step 2.2 Analyze the result
Please switch to Applitools dashboard in your browser. 

::: tip
Remember to click on the "Refresh" icon in the left panel to see the new test result
:::

You will see a new test run with an "unresolved" status. This means Applitools is asking you to check if the differences are valid. If so, accept it and this result will become a new baseline. If not, reject it and your result will be marked as "Failed" and your previous baseline remains as is.

#### Step 2.3: Click on the result image

<img src="/step2.3.gif" alt="Step 2.3" />

#### Step 2.4 Click on the "Toggle" button to see differences between the baseline and current checkpoint
<img src="/step2.4.gif" alt="Step 2.4" />

#### Step 2.5 Click on the Radar button to highlight differences at once

This is very handy when your app is complex and has lot of data.
<img src="/step2.5.gif" alt="Step 2.5" />

#### Step 2.6 Zoom in and see each difference closely
<img src="/step2.6.gif" alt="Step 2.6" />

## Part 3 - Understand why Applitools AI eyes is superior to pixel-by-pixel comparison
At Applitools we have trained our AI with millions of images to look for differences in various manner and also to ignore certain types of differences that we humans usually ignore. We provide 4 different "modes" to compare differences.  In this part you will see how differences between 4 "modes" of comparisons. 

<img src="/part3.png" alt="Part 3" />

#### Step 3.1 Check out the "Strict" mode by selecting the option in the menu

This mode uses AI to simulate the differences that are commonly found by the human eye. It ignores some of the minor differences like "off-by-a-pixel" type errors. This help eliminate common false-positives of pixel-by-pixel comparison tools.

::: tip
This is the default mode. You can set whichever mode you want in code.
:::

<img src="/step3.1.gif" alt="Step 3.1" />

#### Step 3.2 Check out the "Exact" mode by selecting the option in the left-menu
This mode does pixel-by-pixel comparison. This will cause lot of false-positives! **This is one of the big reasons why we use AI**

Notice that a lot of things in the background image is also considered as real bugs! ⚠️

<img src="/step3.2.gif" alt="Step 3.2" />


::: warning
Do not use this mode unless really necessary as it does pixel-by-pixel comparison and may lead to false positives.

Most other Visual testing tools/methods become useless because they use a simple pixel-by-pixel comparison.
:::

#### Step 3.3 Check out "Content" mode by selecting the option in the menu
Content mode works in a similar way to Strict except for the fact that it ignores colors.

::: tip
The content level can be useful if your website includes different colors which are not relevant for your tests
:::


#### Step 3.4 Check out the "Layout" mode by selecting the option in the left-menu
This mode shows any major differences in the layouts like a major section is removed. 

> In our example there are no major layout changes so if you were simply testing if the structure of the app looks good, and are using the layout mode in your code, it would succeed!

<img src="/step3.4.gif" alt="Step 3.4" />

::: tip
For most scenarios, we recommend using either the "Strict" mode or the "Layout" mode. Use "Content" and "Exact" modes for special cases.
:::

## Part 4 - Accepting 100s of changes by clicking a button instead of updating numerous tests
Now let's imagine that you did your analysis and it turns out all those differences are because of just a new version of the app. Typically this mean you'd need to throw out or rewrite 100s of tests! In "Visual testing" you don't have because you didn't really write any tests 😊! 

::: tip Note
We'll go over the few lines of code you will add to import Applitools and generate images but that's about all the code you'll write. And once you wrote it, it won't change!
:::

To accept 100s of changes, simply click on one of the three "Thumbs up" icons.

There are three options:

1. **Accept the differences and the checkpoint image of this test step**: This option allows us to accept all the changes for this specific step and not other steps in the same test (if there are multiple steps).

2. **Accept the differences and checkpoint images of all test steps with similar differences**: This option allows us to accept similar differences in all the steps. 

3. **Accept the differences and checkpoint images of all test steps**: This accepts all test steps irrespective of similar differences or not. Essentially, you get a new baseline for all test steps.

#### Step 4.1 : Select "Accept the differences and the checkpoint image of this test step" option

#### Step 4.2: Press Save
<img src="/step4.2.png" alt="Step 4.2" />

#### Step 4.3: Re-run the test

Switch to the command prompt and run:

```$ npm test part2```

#### Step 4.4: Check the result in the Dashboard

Switch to [Applitools dashboard](https://applitools.com/) in the browser. Press the "Refresh" button and then you should see the result marked as "Passed".
<img src="/step4.4.png" alt="Step 4.4" />

## Part 5 - Use advanced AI tools to work with real-world scenarios
In this part you will run tests on the main app page and learn about how to deal with dynamic contents and floating contents.
<img src="/part5.png" alt="Part 5" />

#### Step 5.1 Run the test on the main app

The following command opens the main app and generates screenshot and closes it.

`$ npm test part_5_1`

::: tip A note about taking full page screenshot
Note that the main app is long goes below the fold. So the Applitools scrolls down the page **twice**. First time to load everything below the scroller and then it goes back up to the top of the page and then it scrolls down the second time to take the screenshot.


This is because we have eyes.setForceFullPageScreenshot(true); //force scrolling
:::

#### Step 5.2 Run the test on the main app (version 2)

Now run the following command to open up the second version of the app so we can see differences.

`$ npm test part_5_2`

​

#### Step 5.3 See the differences
<img src="/step5.3.gif" alt="Step 5.3" />

#### Step 5.4 Dealing with Dynamic contents

Dynamic contents are contents that constantly change, for example a clock. If you use pixel-by-pixel comparison, your test will fail every time. Thankfully, Applitools provide a simple way to ignore a region so you can continue to visual test the rest of the page. 

##### Step 5.4.1 Click on the "Ignore region" option 

##### Step 5.4.2 Select the region around the time
<img src="/step5.4.2.gif" alt="Step 5.4.2" />

#### Step 5.4 Dealing with floating contents

Sometimes the data remains the same but they move or float around a bit. For example if you center-align some data then if the data changes, the browser will move it a bit to keep it center. But this causes problems for visual test. Again, you can use Applitools' "Floating region" option to manually add some wiggle room.

In our app, the **Current time is:** text moves sideways because it is center aligned. Let's add some wiggle room.

#### Step 5.4.1 Select "Floating region" option from the menu

#### Step 5.4.2 Select the area around the  "Current time is:" to add
<img src="/step5.4.3.gif" alt="Step 5.4.3" />

#### Step 5.4.4 Press "Thumbs up"

#### Step 5.4.5 Press "Save"

## Part 6 - Code highlights
Here are all the code you need (in addition to your regular test code) and most of it is just one time deal.

#### 6.1 Import the SDK

```js
//import the "eyes" SDK
var SeleniumSDK = require("eyes.selenium");
var Eyes = SeleniumSDK.Eyes;
```

#### 6.2 Initialize the SDK and set API key

```js
// Initialize the eyes SDK and set your private API key.
var eyes = new Eyes();
​
//⚠️️️Set the APPLITOOLS_API_KEY environment variable
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
​
//scroll the entire page (optional)
eyes.setForceFullPageScreenshot(true);
```

#### 6.3 Set the application (AUT) name, the test name and set browser's viewport size

```js
  eyes.open(driver, testSelector.appName, testSelector.testName, {
    width: testSelector.viewportWidth,
    height: testSelector.viewportHeight
  });
```

5.4 Generate screenshot. 

This line uploads the image data to Applitools for the AI to compare differences, generate baseline and so on.

```js
 // Visual checkpoint #1.
  eyes.checkWindow(testSelector.windowName);
```

5.5 Close Applitools

// If the test was aborted before eyes.close was called ends the test as aborted.
  eyes.close();

Note that because this example has only one test, the code you include to add Applitools may look like a lot but that's most of the code you'll write even if you write 1000 tests! Only thing you'll add for the rest of the test is "eyes.checkWindow()", "eyes.checkRegion()" etc lines

Here is all the code from the test start.js 

```js
//start.js
require("chromedriver");
​
var webdriver = require("selenium-webdriver");
var Capabilities = webdriver.Capabilities;
var Builder = webdriver.Builder;
var By = webdriver.By;
​
var SeleniumSDK = require("eyes.selenium");
var Eyes = SeleniumSDK.Eyes;
var ConsoleLogHandler = SeleniumSDK.ConsoleLogHandler;
​
//Runs different tests based on CLI input such as "part1", "part2" and so on.
var testSelector = require("./testSelector.js");
console.log(testSelector);
​
// Open a Chrome browser.
var driver = new Builder().withCapabilities(Capabilities.chrome()).build();
​
// Initialize the eyes SDK and set your private API key.
var eyes = new Eyes();
​
//⚠️️️  Please set the APPLITOOLS_API_KEY environment variable
//on Mac: export APPLITOOLS_API_KEY='YOUR_API_KEY'
//on windows: set APPLITOOLS_API_KEY='YOUR_API_KEY'
//Note: You can get your API key by logging into Applitools | Click on the person icon (top-right corner) | Click on the "My API key" menu
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
​
//scroll the entire page
eyes.setForceFullPageScreenshot(true);
​
if (!process.env.APPLITOOLS_API_KEY) {
  console.log(`
     ⚠️️️  Please set the APPLITOOLS_API_KEY environment variable
​
        * On Mac: export APPLITOOLS_API_KEY='YOUR_API_KEY'
        
        * On windows: set APPLITOOLS_API_KEY='YOUR_API_KEY'
        
        * Please Note: You can get your API key by logging into applitools.com | Click on the person icon (top-right corner) | Click on the "My API key" menu
    `);
  process.exit(0);
}
​
//eyes.setLogHandler(new ConsoleLogHandler(false));
​
try {
  // Set the application (AUT) name, the test name and set browser's viewport size
  eyes.open(driver, testSelector.appName, testSelector.testName, {
    width: testSelector.viewportWidth,
    height: testSelector.viewportHeight
  });
​
  // Navigate the browser to the "hello world!" web-site.
  driver.get(testSelector.url);
​
  // Visual checkpoint #1.
  eyes.checkWindow(testSelector.windowName);
​
  //Only go to the main app page if the test/tutorial needs it
  if (testSelector.goto2ndPage) {
    // Click the "Click me!" button.
    driver.findElement(By.id("log-in")).click();
​
    // Visual checkpoint #2.
    eyes.checkWindow("Click!");
  }
​
  // End the test.
  eyes.close(false);
} finally {
  // Close the browser.
  driver.quit();
​
  // If the test was aborted before eyes.close was called ends the test as aborted.
  eyes.abortIfNotClosed();
}
```
​

## Part 7 - Congratulations and next steps!
Congratulations on completing the quick start. Here is the link to our [technical documentation](https://applitools.com/docs) to learn more.