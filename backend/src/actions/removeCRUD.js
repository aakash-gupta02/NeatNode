import fs from "fs";
import path from "path";

export function removeCrud(targetPath) {
    const crudPaths = [
        "src/models/user.model.js",
        "src/controllers/user.controller.js",
        "src/routes/user.route.js",
        "src/services/user.service.js",
        "src/validations/user.validation.js",
        "src/middlewares/auth.middleware.js",
        "src/schemas/user.schema.js"
    ];

    crudPaths.forEach(relPath => {
        const absPath = path.join(targetPath, relPath);
        if (fs.existsSync(absPath)) fs.rmSync(absPath, { force: true });
    });
}

export function removeCrudReferences(appJsPath) {
    let content = fs.readFileSync(appJsPath, "utf8");

    // Remove imports block
    content = content.replace(
        /\/\/ ROUTE_IMPORTS_START[\s\S]*?\/\/ ROUTE_IMPORTS_END/,
        ""
    );

    // Remove route usage block
    content = content.replace(
        /\/\/ ROUTE_USES_START[\s\S]*?\/\/ ROUTE_USES_END/,
        ""
    );

    fs.writeFileSync(appJsPath, content, "utf8");
}
