# Matriz de Pruebas Unitarias

**Fecha de generación:** 17/11/2025

**Total de pruebas:** 297


=== ESTADÍSTICAS DE PRUEBAS ===

Total de pruebas: 297

Por Categoría:
  Dominio: 79 (26.6%)
  Infraestructura: 218 (73.4%)

Por Tipo de Prueba:
  Normal: 110 (37.0%)
  Error/Excepción: 58 (19.5%)
  Exitoso: 40 (13.5%)
  Límite: 89 (30.0%)

Por Módulo:
  UserGatewayAdapter: 33
  StudentGatewayAdapter: 31
  RoomGatewayAdapter: 26
  AuthAdapter: 20
  RoomUCAdapter: 15
  UserUCAdapter: 15
  StudentUCAdapter: 14
  ResumenEsfGatewayAdapter: 13
  ActivosFijosGatewayAdapter: 12
  Auth.controller: 10
  EsfPatrimonioGatewayAdapter: 10
  Form110GatewayAdapter: 10
  ResumenEsf.controller: 8
  AuthMiddleware: 8
  ValidatorMiddleware: 8
  CaratulaGatewayAdapter: 6
  AuthUCAdapter: 5
  DetalleRenglonesGatewayAdapter: 5
  IngFactGatewayAdapter: 5
  RentaLiquidaGatewayAdapter: 5
  Form110UCAdapter: 4
  ImpuestoDiferidoGatewayAdapter: 4
  ReportGatewayAdapter: 4
  ActivosFijosUCAdapter: 3
  CaratulaUCAdapter: 3
  DetalleRenglonesUCAdapter: 3
  EsfPatrimonioUCAdapter: 3
  ImpuestoDiferidoUCAdapter: 3
  IngFactUCAdapter: 3
  RentaLiquidaUCAdapter: 3
  ResumenEsfUCAdapter: 3
  ReportUCAdapter: 2


## Detalle por Módulo

### UserGatewayAdapter (33 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getUserById | debería retornar un usuario cuando se proporciona un ID válido (caso normal) | Normal |
| General | debería retornar null cuando el usuario no existe (caso límite) | Límite |
| General | debería manejar un ID con string vacío (caso límite) | Límite |
| General | debería manejar un ID con string muy largo (caso límite) | Límite |
| existByEmail | debería retornar true cuando el email existe (caso normal) | Normal |
| General | debería retornar false cuando el email no existe (caso normal) | Normal |
| General | debería manejar un email con string vacío (caso límite) | Límite |
| General | debería manejar un email con caracteres especiales (caso límite) | Límite |
| getUserByEmail | debería retornar un usuario cuando se proporciona un email válido (caso normal) | Normal |
| General | debería retornar null cuando el email no existe (caso límite) | Límite |
| General | debería manejar un email sensible a mayúsculas (caso límite) | Límite |
| General | debería manejar un email muy largo (caso límite) | Límite |
| deleteUserById | debería eliminar un usuario exitosamente cuando el usuario existe (caso normal) | Exitoso |
| General | debería lanzar un error cuando el usuario no existe (caso límite) | Error/Excepción |
| General | debería lanzar un error con ID vacío (caso límite) | Error/Excepción |
| General | debería manejar errores de base de datos apropiadamente | Error/Excepción |
| changeUserPassword | debería actualizar la contraseña exitosamente cuando el usuario existe (caso normal) | Exitoso |
| General | debería lanzar un error cuando el usuario no existe (caso límite) | Error/Excepción |
| General | debería manejar una contraseña vacía (caso límite) | Límite |
| General | debería manejar una contraseña muy larga (caso límite) | Límite |
| createUser | debería crear un usuario exitosamente con datos válidos (caso normal) | Exitoso |
| General | debería crear un usuario admin exitosamente (caso normal) | Exitoso |
| General | debería manejar un usuario con nombre mínimo (caso límite) | Límite |
| General | debería manejar un usuario con nombre muy largo (caso límite) | Límite |
| updateUser | debería actualizar un usuario exitosamente con datos válidos (caso normal) | Exitoso |
| General | debería actualizar el rol de usuario de profesor a admin (caso normal) | Normal |
| General | debería manejar actualización con strings vacíos en los campos (caso límite) | Límite |
| General | debería manejar errores de base de datos durante la actualización (caso límite) | Error/Excepción |
| listProfessorUsers | debería retornar una lista de usuarios profesores (caso normal) | Normal |
| General | debería retornar una lista de usuarios administradores (caso normal) | Normal |
| General | debería retornar un array vacío cuando no se encuentran usuarios (caso límite) | Límite |
| General | debería retornar un único usuario cuando solo existe uno (caso límite) | Límite |
| General | debería manejar un gran número de usuarios (caso límite) | Límite |

### StudentGatewayAdapter (31 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| createStudent | debería crear un estudiante exitosamente con datos válidos (caso normal) | Exitoso |
| General | debería crear un estudiante con cédula de longitud mínima (caso límite) | Límite |
| General | debería crear un estudiante con cédula muy larga (caso límite) | Límite |
| General | debería crear un estudiante con cédula vacía (caso límite) | Límite |
| getStudents | debería retornar una lista de estudiantes (caso normal) | Normal |
| General | debería retornar un array vacío cuando no hay estudiantes (caso límite) | Límite |
| General | debería retornar un único estudiante cuando solo existe uno (caso límite) | Límite |
| General | debería manejar un gran número de estudiantes (caso límite) | Límite |
| getStudentById | debería retornar un estudiante cuando se proporciona un ID válido (caso normal) | Normal |
| General | debería retornar null cuando el estudiante no existe (caso límite) | Límite |
| General | debería manejar un ID vacío (caso límite) | Límite |
| General | debería manejar un ID muy largo (caso límite) | Límite |
| updateStudent | debería actualizar un estudiante exitosamente con datos válidos (caso normal) | Exitoso |
| General | debería cambiar la sala del estudiante (caso normal) | Normal |
| General | debería manejar actualización con cédula vacía (caso límite) | Límite |
| General | debería manejar errores de base de datos durante la actualización (caso límite) | Error/Excepción |
| deleteStudent | debería eliminar un estudiante exitosamente cuando existe (caso normal) | Exitoso |
| General | debería intentar eliminar con ID vacío (caso límite) | Límite |
| General | debería manejar errores de base de datos al eliminar (caso límite) | Error/Excepción |
| General | debería manejar eliminación de estudiante inexistente (caso límite) | Límite |
| searchStudentByCedulaRoom | debería retornar un estudiante cuando cédula y sala coinciden (caso normal) | Normal |
| General | debería retornar null cuando no existe estudiante con esa cédula en esa sala (caso límite) | Límite |
| General | debería manejar cédula vacía (caso límite) | Límite |
| General | debería manejar roomID vacío (caso límite) | Límite |
| General | debería manejar cédula y roomID muy largos (caso límite) | Límite |
| searchStudentsByRoom | debería retornar una lista de estudiantes de una sala (caso normal) | Normal |
| General | debería retornar un array vacío cuando la sala no tiene estudiantes (caso límite) | Límite |
| General | debería retornar un único estudiante cuando la sala tiene solo uno (caso límite) | Límite |
| General | debería manejar un gran número de estudiantes en una sala (caso límite) | Límite |
| General | debería manejar roomID vacío (caso límite) | Límite |
| General | debería manejar roomID muy largo (caso límite) | Límite |

### RoomGatewayAdapter (26 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| createRoom | debería crear una sala exitosamente con datos válidos (caso normal) | Exitoso |
| General | debería crear una sala con estado cerrado (caso normal) | Normal |
| General | debería manejar una sala con nombre vacío (caso límite) | Límite |
| General | debería manejar una sala con nombre muy largo (caso límite) | Límite |
| obtainRoomByID | debería retornar una sala cuando se proporciona un ID válido (caso normal) | Normal |
| General | debería retornar null cuando la sala no existe (caso límite) | Límite |
| General | debería manejar un ID vacío (caso límite) | Límite |
| General | debería manejar un ID muy largo (caso límite) | Límite |
| obtainRoomsByTeacher | debería retornar una lista de salas de un profesor (caso normal) | Normal |
| General | debería retornar un array vacío cuando el profesor no tiene salas (caso límite) | Límite |
| General | debería retornar una única sala cuando el profesor tiene solo una (caso límite) | Límite |
| General | debería manejar un gran número de salas (caso límite) | Límite |
| uptdateRoom | debería actualizar una sala exitosamente con datos válidos (caso normal) | Exitoso |
| General | debería cambiar el estado de la sala de abierta a cerrada (caso normal) | Normal |
| General | debería manejar actualización con campos vacíos (caso límite) | Límite |
| General | debería manejar errores de base de datos durante la actualización (caso límite) | Error/Excepción |
| deleteRoomByID | debería eliminar una sala exitosamente cuando existe (caso normal) | Exitoso |
| General | debería intentar eliminar con ID vacío (caso límite) | Límite |
| General | debería manejar errores de base de datos al eliminar (caso límite) | Error/Excepción |
| General | debería manejar eliminación de sala inexistente (caso límite) | Límite |
| validateRoomPassword | debería retornar datos de la sala cuando la contraseña es correcta (caso normal) | Normal |
| General | debería retornar datos de sala cerrada con contraseña válida (caso normal) | Normal |
| General | debería retornar null cuando la contraseña es incorrecta (caso límite) | Límite |
| General | debería manejar contraseña vacía (caso límite) | Límite |
| General | debería manejar contraseña muy larga (caso límite) | Límite |
| General | debería retornar solo roomID y roomStatus, no toda la sala (caso normal) | Normal |

### AuthAdapter (20 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| createAccessToken | debería crear un token exitosamente con datos válidos (caso normal) | Exitoso |
| General | debería crear un token para un usuario administrador (caso normal) | Normal |
| General | debería crear un token con datos mínimos (caso límite) | Límite |
| General | debería crear un token con datos complejos (caso normal) | Normal |
| General | debería rechazar cuando jwt.sign falla (caso límite) | Error/Excepción |
| General | debería rechazar cuando el token es undefined (caso límite) | Error/Excepción |
| General | debería crear un token con objeto vacío (caso límite) | Límite |
| General | debería crear un token con datos muy grandes (caso límite) | Límite |
| verifyAccessToken | debería verificar y decodificar un token válido (caso normal) | Normal |
| General | debería verificar un token de administrador (caso normal) | Normal |
| General | debería retornar null cuando el token es inválido (caso límite) | Límite |
| General | debería retornar null cuando el token está expirado (caso límite) | Límite |
| General | debería retornar null cuando el token tiene firma inválida (caso límite) | Límite |
| General | debería manejar token vacío (caso límite) | Límite |
| General | debería manejar token muy largo (caso límite) | Límite |
| General | debería manejar token malformado sin puntos (caso límite) | Límite |
| General | debería decodificar token con datos complejos (caso normal) | Normal |
| General | debería manejar error genérico de verificación (caso límite) | Error/Excepción |
| Integración createAccessToken y verifyAccessToken | debería crear y verificar un token correctamente (caso de integración) | Exitoso |
| General | debería rechazar token modificado (caso de seguridad) | Error/Excepción |

### RoomUCAdapter (15 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| createRoom | debería crear una sala cuando la contraseña no existe | Normal |
| General | debería lanzar error cuando la contraseña ya existe | Error/Excepción |
| obtainRoomByID | debería retornar la sala cuando existe | Normal |
| General | debería lanzar error cuando la sala no existe | Error/Excepción |
| obtainRoomsByTeacher | debería retornar las salas del profesor | Normal |
| uptdateRoom | debería actualizar la sala cuando existe y la contraseña es válida | Normal |
| General | debería lanzar error cuando la sala no existe | Error/Excepción |
| General | debería lanzar error cuando la contraseña ya existe | Error/Excepción |
| deleteRoomByID | debería eliminar la sala cuando existe | Normal |
| General | debería lanzar error cuando la sala no existe | Error/Excepción |
| validateRoomPassword | debería retornar el roomID cuando la contraseña es válida y la sala está abierta | Normal |
| General | debería lanzar error cuando la contraseña no existe | Error/Excepción |
| General | debería lanzar error cuando la sala está cerrada | Error/Excepción |
| changeRoomState | debería cambiar el estado de la sala cuando existe | Normal |
| General | debería lanzar error cuando la sala no existe | Error/Excepción |

### UserUCAdapter (15 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getUserById | debería retornar el usuario sin contraseña cuando existe | Normal |
| General | debería lanzar error cuando el usuario no existe | Error/Excepción |
| deleteUserById | debería eliminar el usuario cuando existe | Normal |
| General | debería lanzar error cuando el usuario no existe | Error/Excepción |
| changeUserPassword | debería cambiar la contraseña cuando la contraseña vieja es correcta | Normal |
| General | debería lanzar error cuando la contraseña vieja es incorrecta | Error/Excepción |
| General | debería lanzar error cuando el usuario no existe | Error/Excepción |
| createUser | debería crear un usuario cuando el email no existe | Normal |
| General | debería lanzar error cuando el email ya existe | Error/Excepción |
| updateUser | debería actualizar el usuario cuando existe y el email no cambia | Normal |
| General | debería validar el nuevo email cuando cambia | Normal |
| General | debería lanzar error cuando el usuario no existe | Error/Excepción |
| General | debería lanzar error cuando el nuevo email ya existe | Error/Excepción |
| listProfessorUsers | debería retornar la lista de profesores cuando el rol es professor | Normal |
| General | debería lanzar error cuando el rol no es professor | Error/Excepción |

### StudentUCAdapter (14 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| createStudent | debería crear un estudiante con todos los formularios y retornar token | Normal |
| General | debería lanzar error cuando el room no existe | Error/Excepción |
| General | debería lanzar error cuando el estudiante ya existe en el room | Error/Excepción |
| getStudents | debería retornar todos los estudiantes | Normal |
| getStudentById | debería retornar el estudiante cuando existe | Normal |
| General | debería lanzar error cuando el estudiante no existe | Error/Excepción |
| updateStudent | debería actualizar el estudiante cuando existe | Normal |
| General | debería lanzar error cuando el estudiante no existe | Error/Excepción |
| deleteStudent | debería eliminar el estudiante cuando existe | Normal |
| General | debería lanzar error cuando el estudiante no existe | Error/Excepción |
| getStudentByCedulaRoom | debería retornar el estudiante con token cuando existe | Normal |
| General | debería lanzar error cuando el room no existe | Error/Excepción |
| General | debería lanzar error cuando el estudiante no existe en el room | Error/Excepción |
| searchStudentsByRoom | debería retornar los estudiantes del room | Normal |

### ResumenEsfGatewayAdapter (13 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debe retornar el formulario de resumen esf cuando existe | Normal |
| General | debe retornar null cuando no existe el formulario | Límite |
| General | debe manejar IDs vacíos correctamente | Límite |
| createForm | debe crear un formulario de resumen esf exitosamente | Exitoso |
| General | debe crear un formulario con contenido vacío | Límite |
| General | debe crear un formulario con datos completos | Normal |
| updateForm | debe actualizar un formulario de resumen esf exitosamente | Exitoso |
| General | debe manejar actualización cuando no existe reporte | Normal |
| General | debe actualizar parcialmente el contenido | Normal |
| calculateReference | debe calcular referencias del resumen esf cuando existen los datos | Normal |
| General | debe retornar null cuando no existe el reporte | Límite |
| General | debe manejar contenido no válido correctamente | Exitoso |
| General | debe retornar el formulario sin cambios cuando el contenido no es un objeto válido | Normal |

### ActivosFijosGatewayAdapter (12 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debe retornar el formulario de activos fijos cuando existe | Normal |
| General | debe retornar null cuando no existe el formulario | Límite |
| General | debe manejar IDs vacíos correctamente | Límite |
| createForm | debe crear un formulario de activos fijos exitosamente | Exitoso |
| General | debe crear un formulario con contenido vacío | Límite |
| General | debe crear un formulario con datos completos | Normal |
| updateForm | debe actualizar un formulario de activos fijos exitosamente | Exitoso |
| General | debe manejar actualización cuando no existe reporte | Normal |
| General | debe actualizar parcialmente el contenido | Normal |
| calculateReference | debe retornar el formulario sin cambios (no hay cálculo) | Normal |
| General | debe retornar null cuando no existe el reporte | Límite |
| General | debe retornar el formulario completo sin transformaciones | Normal |

### Auth.controller (10 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| login | debe iniciar sesión exitosamente con credenciales válidas | Exitoso |
| General | debe retornar 401 cuando las credenciales son inválidas | Normal |
| General | debe manejar errores y llamar a next | Error/Excepción |
| General | debe manejar login de usuario admin | Normal |
| logout | debe cerrar sesión exitosamente | Exitoso |
| General | debe manejar errores durante logout | Error/Excepción |
| profile | debe retornar el perfil del usuario autenticado | Normal |
| General | debe manejar errores al obtener el perfil | Error/Excepción |
| studentProfile | debe retornar el perfil del estudiante autenticado | Normal |
| General | debe manejar errores al obtener el perfil del estudiante | Error/Excepción |

### EsfPatrimonioGatewayAdapter (10 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario de patrimonio cuando existe | Normal |
| General | debería retornar null cuando no existe el formulario | Límite |
| createForm | debería crear un formulario de patrimonio exitosamente | Exitoso |
| General | debería crear un formulario con contenido vacío | Límite |
| General | debería crear un formulario con valores límite grandes | Límite |
| updateForm | debería actualizar el formulario exitosamente | Exitoso |
| General | debería manejar actualización cuando el reporte no existe | Normal |
| General | debería actualizar formulario con cambios parciales | Normal |
| calculateReference | debería retornar null cuando faltan datos requeridos | Límite |
| General | debería manejar contenido null en detalle renglones | Límite |

### Form110GatewayAdapter (10 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario 110 cuando existe | Normal |
| General | debería retornar null cuando no existe el formulario 110 | Límite |
| createForm | debería crear un formulario 110 exitosamente | Exitoso |
| General | debería crear un formulario con contenido vacío | Límite |
| General | debería crear formulario con todos los datos informativos | Normal |
| updateForm | debería actualizar el formulario 110 exitosamente | Exitoso |
| General | debería manejar actualización cuando el reporte no existe | Normal |
| General | debería actualizar formulario con cambios parciales en liquidación | Normal |
| calculateReference | debería retornar el formulario sin cambios cuando no hay contenido | Normal |
| General | debería retornar null cuando no existe el formulario | Límite |

### ResumenEsf.controller (8 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDResumenEsferi | debe retornar el resumen esf del usuario autenticado | Normal |
| General | debe manejar cuando no existe el resumen esf | Normal |
| General | debe manejar errores y llamar a next | Error/Excepción |
| updateResumenEsferi | debe actualizar el resumen esf exitosamente | Exitoso |
| General | debe manejar errores durante la actualización | Error/Excepción |
| getResumenEsferiByStudentAndRoom | debe retornar el resumen esf por stuID y roomID desde params | Normal |
| General | debe retornar null cuando no existe el resumen | Límite |
| General | debe manejar errores | Error/Excepción |

### AuthMiddleware (8 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| authenticate | debe autenticar exitosamente con token válido y sin restricción de roles | Exitoso |
| General | debe autenticar exitosamente con rol permitido | Exitoso |
| General | debe rechazar cuando no hay token | Normal |
| General | debe rechazar cuando el token es inválido | Normal |
| General | debe rechazar cuando el rol del usuario no está permitido | Normal |
| General | debe permitir acceso cuando el usuario tiene uno de los roles permitidos | Normal |
| General | debe manejar errores durante la verificación del token | Error/Excepción |
| General | debe manejar múltiples roles permitidos correctamente | Exitoso |

### ValidatorMiddleware (8 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| validate | debe validar exitosamente datos correctos | Exitoso |
| General | debe rechazar datos con email inválido | Normal |
| General | debe rechazar datos con password corta | Normal |
| General | debe rechazar cuando faltan campos requeridos | Normal |
| General | debe manejar múltiples errores de validación | Error/Excepción |
| General | debe validar objetos anidados correctamente | Exitoso |
| General | debe rechazar objetos anidados con errores | Error/Excepción |
| General | debe transformar datos cuando el schema tiene transformaciones | Normal |

### CaratulaGatewayAdapter (6 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario de carátula cuando existe | Normal |
| General | debería retornar null cuando no existe el reporte | Límite |
| createForm | debería crear un nuevo formulario de carátula | Normal |
| updateForm | debería actualizar el formulario existente | Normal |
| calculateReference | debería retornar el formulario sin modificaciones | Normal |
| General | debería retornar null cuando no existe el formulario | Límite |

### AuthUCAdapter (5 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| login | debería retornar token y datos del usuario cuando las credenciales son correctas | Normal |
| General | debería lanzar error cuando el usuario no existe | Error/Excepción |
| General | debería lanzar error cuando la contraseña es incorrecta | Error/Excepción |
| verifyToken | debería retornar los datos del token cuando es válido | Normal |
| General | debería retornar null cuando el token es inválido | Límite |

### DetalleRenglonesGatewayAdapter (5 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario de detalle renglones cuando existe | Normal |
| General | debería retornar null cuando no existe el reporte | Límite |
| createForm | debería crear un nuevo formulario de detalle renglones | Normal |
| updateForm | debería actualizar el formulario existente | Normal |
| calculateReference | debería retornar null cuando no existe el formulario | Límite |

### IngFactGatewayAdapter (5 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario cuando existe | Normal |
| General | debería retornar null cuando no existe el reporte | Límite |
| createForm | debería crear un nuevo formulario | Normal |
| updateForm | debería actualizar el formulario existente | Normal |
| calculateReference | debería retornar null cuando no existe el formulario | Límite |

### RentaLiquidaGatewayAdapter (5 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario de renta líquida cuando existe | Normal |
| General | debería retornar null cuando no existe el reporte | Límite |
| createForm | debería crear un nuevo formulario de renta líquida | Normal |
| updateForm | debería actualizar el formulario existente | Normal |
| calculateReference | debería retornar null cuando no existe el formulario | Límite |

### Form110UCAdapter (4 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario calculado cuando existe | Normal |
| General | debería retornar el formulario calculado (Promise) incluso cuando se resuelve a null | Límite |
| General | debería lanzar error cuando el formulario no existe | Error/Excepción |
| updateForm | debería actualizar el formulario correctamente | Exitoso |

### ImpuestoDiferidoGatewayAdapter (4 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario cuando existe | Normal |
| General | debería retornar null cuando no existe el reporte | Límite |
| createForm | debería crear un nuevo formulario | Normal |
| updateForm | debería actualizar el formulario existente | Normal |

### ReportGatewayAdapter (4 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDReport | debería retornar el reporte cuando existe | Normal |
| General | debería retornar null cuando el reporte no existe | Límite |
| createReport | debería crear un reporte correctamente | Exitoso |
| General | debería crear un reporte con todos los IDs de formularios | Normal |

### ActivosFijosUCAdapter (3 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario calculado cuando existe | Normal |
| General | debería lanzar error cuando el formulario no existe | Error/Excepción |
| updateForm | debería actualizar el formulario correctamente | Exitoso |

### CaratulaUCAdapter (3 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario cuando existe | Normal |
| General | debería lanzar error cuando el formulario no existe | Error/Excepción |
| updateForm | debería actualizar el formulario correctamente | Exitoso |

### DetalleRenglonesUCAdapter (3 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario cuando existe | Normal |
| General | debería lanzar error cuando el formulario no existe | Error/Excepción |
| updateForm | debería actualizar el formulario correctamente | Exitoso |

### EsfPatrimonioUCAdapter (3 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario calculado cuando existe | Normal |
| General | debería lanzar error cuando el formulario no existe | Error/Excepción |
| updateForm | debería actualizar el formulario correctamente | Exitoso |

### ImpuestoDiferidoUCAdapter (3 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario calculado cuando existe | Normal |
| General | debería lanzar error cuando el formulario no existe | Error/Excepción |
| updateForm | debería actualizar el formulario correctamente | Exitoso |

### IngFactUCAdapter (3 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario calculado cuando existe | Normal |
| General | debería lanzar error cuando el formulario no existe | Error/Excepción |
| updateForm | debería actualizar el formulario correctamente | Exitoso |

### RentaLiquidaUCAdapter (3 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario calculado cuando existe | Normal |
| General | debería lanzar error cuando el formulario no existe | Error/Excepción |
| updateForm | debería actualizar el formulario correctamente | Exitoso |

### ResumenEsfUCAdapter (3 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getIDForm | debería retornar el formulario calculado cuando existe | Normal |
| General | debería lanzar error cuando el formulario no existe | Error/Excepción |
| updateForm | debería actualizar el formulario correctamente | Exitoso |

### ReportUCAdapter (2 pruebas)

| Método | Descripción | Tipo |
|--------|-------------|------|
| getReportByID | debería retornar el reporte cuando existe | Normal |
| General | debería lanzar error cuando el reporte no existe | Error/Excepción |

