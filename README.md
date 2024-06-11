# External DesignDocs Template Repo
This repository can be used as template for all the other repositories of external and verified views
that can be added to the Kraken Cloud and Lite for custom development.

## Defining DesignDocs and Views
The Design Document will be auto-generated and signed from the view files added to the proper subfolder in the **view** folder.

### Defining a View
To define a view, create the .js file that describes the view in the subfolder of **views** of the proper entity. (e.g. If you are creating a view for AccessLogs, the file must be placed in the **view/accesslog** folder).<br>
The name of the file should be in [snake case](https://en.wikipedia.org/wiki/Snake_case) (only lowercase letters, number and underscores allowed) and must end with .js.<br>
The content of the file should be a valid JS snippet:
```javascript
map = function(doc) {
    if (doc.java_type == 'org.taktik.icure.entities.AccessLog' && !doc.deleted && doc.date) {
        emit(doc.date, doc._id);
    }
}
```
You can find an example of a correct view in the **example** folder.
Once the views are pushed to main, a GitHub action will automatically minify and sign them.
