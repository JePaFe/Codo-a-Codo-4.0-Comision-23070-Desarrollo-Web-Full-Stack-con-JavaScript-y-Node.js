INSERT INTO productos (id, nombre, descripcion) 
    VALUES (NULL, 'Producto N° 1', 'Descripción Producto N° 1');

INSERT INTO productos (nombre, descripcion) 
    VALUES ('Producto N° 2', 'Descripción Producto N° 2');

INSERT INTO productos VALUES (NULL, 'Producto N° 1', 'Descripción Producto N° 1');

INSERT INTO productos (nombre, descripcion) 
    VALUES ('Producto N° 3', 'Descripción Producto N° 3'),
            ('Producto N° 4', 'Descripción Producto N° 4');

---

SELECT * FROM productos

SELECT id, nombre FROM productos;

SELECT id, nombre, precio FROM productos WHERE precio > 200;

---

UPDATE productos SET nombre = 'Producto N° X', precio = '150' WHERE id = 2;

---

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `categoria_id`) VALUES (NULL, 'Pro 1', 'Descripcion Prod 1', '100', '2');