# Sout-db

## Usage

``` js
const setuDatabe = require('Sout-db');

setupDatabase(config).then(db => {
    const { Agent, Metric } = db;
})
.catch(err => console.error(err));

```