# data-test attribute
First we add it to top level component.
We catch the element by this attribute to make sure specific component is rendered

We do NOT want ID or class as those have use in production app. They will change and cause our tests to fail

data-test is conventional name

Sometimes we do not want data-test attributes and we want to remove them in production

## wrapper.find(selector) method
finds nodes with this selector