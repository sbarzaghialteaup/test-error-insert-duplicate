const cds = require("@sap/cds");

class CatalogService extends cds.ApplicationService {
  async init() {
    this.on("addBooks", this.addBooks);
    this.on("workaround", this.workaround);

    await super.init();
  }

  async addBooks(req) {
    const tx = cds.tx(req);

    const newBooks = req.data.titles.map((title) => {
      return {
        title,
      };
    });

    console.log(newBooks);

    try {
      await INSERT.into(cds.entities.Books).entries(newBooks);
    } catch (error) {
      console.error(error);
      req.error(400, `Error during generation `);
    }
    req.reply("done");
  }

  async workaround(req) {
    const tx = cds.tx(req);

    const newBooks = req.data.titles.map((title) => {
      return {
        title,
      };
    });

    console.log(newBooks);

    try {
      await Promise.all(
        newBooks.map((book) => INSERT.into(cds.entities.Books).entries(book))
      );
    } catch (error) {
      console.error(error);
      req.error(400, `Error during generation `);
    }
    req.reply("done");
  }
}

module.exports = CatalogService;
