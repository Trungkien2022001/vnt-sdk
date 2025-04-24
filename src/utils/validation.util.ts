export function VNT_GetValidationNestedException(exception: any, messages: string[] = []) {
    if (exception?.constraints) {
      for (const key in exception.constraints) {
        if (Object.hasOwnProperty.call(exception.constraints, key)) {
          messages.push(exception.constraints[key]);
        }
      }
    }

    if (exception?.children?.length) {
      for (const child of exception.children) {
        VNT_GetValidationNestedException(child, messages);
      }
    }

    return messages;
  }
