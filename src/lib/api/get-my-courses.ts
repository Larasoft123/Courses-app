// function tryCatchAsync(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: TypedPropertyDescriptor<any>
// ): void {
//   const originalMethod = descriptor.value;

//   descriptor.value = async function (...args: any[]) {
//     try {
//       return await originalMethod.apply(this, args);
//     } catch (error) {
//       console.error(`Error en el método ${String(propertyKey)}:`, error);
//       // throw error;
//     }
//   };
// }


const baseUrl = process.env.NEXT_PUBLIC_URL;

export class MyCoursesModel {


    
    static async getMyCourses() {
   
        
        
        const response = await fetch(`http://localhost:3000/api/my-courses`,{
            method: "POST"
        });
        const data = await response.json();
        return data;
    }

}

