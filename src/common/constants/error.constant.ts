export const ERROR = {
  CUS_VALIDATION_ERROR: 'CUS_VALIDATION_ERROR', // Yêu cầu không hợp lệ
  CUS_EMAIL_IDENTIFIER_ALREADY_EXISTED: 'CUS_EMAIL_IDENTIFIER_ALREADY_EXISTED', // Email đã liên kết với tài khoản khác
  CUS_PHONE_IDENTIFIER_ALREADY_EXISTED: 'CUS_PHONE_IDENTIFIER_ALREADY_EXISTED', // Số điện thoại đã liên kết với tài khoản khác
  CUS_FACEBOOK_IDENTIFIER_ALREADY_EXISTED: 'CUS_FACEBOOK_IDENTIFIER_ALREADY_EXISTED', // Tài khoản Facebook đã liên kết với tài khoản khác
  CUS_GOOGLE_IDENTIFIER_ALREADY_EXISTED: 'CUS_GOOGLE_IDENTIFIER_ALREADY_EXISTED', // Tài khoản Google đã liên kết với tài khoản khác
  CUS_APPLE_IDENTIFIER_ALREADY_EXISTED: 'CUS_APPLE_IDENTIFIER_ALREADY_EXISTED', // Tài khoản Apple đã liên kết với tài khoản khác
  CUS_USER_NOT_FOUND: 'CUS_USER_NOT_FOUND', // Tài khoản này không tồn tại
  CUS_USER_ALREADY_EXISTED: 'CUS_USER_ALREADY_EXISTED', // Tài khoản đã tồn tại
  CUS_USER_INACTIVE: 'CUS_USER_INACTIVE', // Tài khoản hiện không còn họat động
  CUS_USER_UNAUTHENTICATED: 'CUS_USER_UNAUTHENTICATED', // Tài khoản chưa đăng nhập
  CUS_USER_PROFILE_NOT_FOUND: 'CUS_USER_PROFILE_NOT_FOUND', // Không tìm thấy thông tin tài khoản
  CUS_INVALID_EMAIL_PASSWORD: 'CUS_INVALID_EMAIL_PASSWORD', // Email hoặc mật khẩu không đúng.
  CUS_INVALID_EMAIL_PHONE_PASSWORD: 'CUS_INVALID_EMAIL_PHONE_PASSWORD', // Email/số điện thoại hoặc mật khẩu không đúng.
  CUS_INVALID_PASSWORD: 'CUS_INVALID_PASSWORD', // Mật khẩu không chính xác
  CUS_PASSWORD_REPEATED: 'CUS_PASSWORD_REPEATED', // Mật khẩu không chính xác
  CUS_INVALID_OTP: 'CUS_INVALID_OTP', // Mã OTP không chính xác
  CUS_CANT_SEND_VERIFICATION_NOW: 'CUS_CANT_SEND_VERIFICATION_NOW', // Không thể gửi yêu cầu xác thực vào lúc này,
  CUS_CANT_SEND_VERIFICATION_2_MIN: 'CUS_CANT_SEND_VERIFICATION_2_MIN',
  CUS_TOO_MANY_VERIFICATION_REQUEST: 'CUS_TOO_MANY_VERIFICATION_REQUEST', // Không thể gửi yêu cầu xác thực do vượt quá số lần cho phép trong ngày
  CUS_IP_BLOCKED: 'CUS_IP_BLOCKED',
  CUS_REQUEST_VERIFY_FAIL: 'CUS_REQUEST_VERIFY_FAIL', // Gửi mã OTP không thành công
  CAPTCHA_FAIL: 'CAPTCHA_FAIL', // Gửi mã OTP không thành công
  CUS_VERIFICATION_NOT_FOUND: 'CUS_VERIFICATION_NOT_FOUND', // Không tìm thấy yêu cầu xác thực
  CUS_VERIFICATION_FAILED: 'CUS_VERIFICATION_FAILED', // Bạn đã vượt quá số lần xác nhận cho phép. Vui lòng liên hệ tới đường dây nóng của chúng tôi 0963 266 688 để được hỗ trợ.
  CUS_VERIFICATION_EXPIRED: 'CUS_VERIFICATION_EXPIRED', // Yêu cầu xác thực đã hết hạn
  CUS_UNVERIFY_USER_IDENTIFIER_FAIL: 'CUS_UNVERIFY_USER_IDENTIFIER_FAIL', // Bỏ liên kết tài khoản không thành công
  CUS_REFRESH_TOKEN_FAILED: 'CUS_REFRESH_TOKEN_FAILED', // Refresh Token không hợp lệ
  CUS_SSO_NOT_CONFIGURED: 'CUS_SSO_NOT_CONFIGURED',
  CUS_SSO_INCORRECTLY_CONFIGURED: 'CUS_SSO_INCORRECTLY_CONFIGURED',
  CUS_DUPLICATE_EMPLOYEE_ID: 'CUS_DUPLICATE_EMPLOYEE_ID',
  CUS_SSO_EMAIL_EXISTED: 'CUS_SSO_EMAIL_EXISTED',
  E2100: 'E2100',
  CUS_SSO_INVALID_EMAIL: 'CUS_SSO_INVALID_EMAIL',
  CUS_SSO_INVALID_PASS: 'CUS_SSO_INVALID_PASS',
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  // user security
  USER_INVALID_EMAIL_PHONE: 'US-001', // Email/số điện thoại không tồn tại.
  USER_LOCK: 'US-002', // Tai khoan nay da bi khoa.
};

export type TVntError = keyof typeof ERROR;

export enum EStandardError {
  BAD_REQUEST = 'Bad Request',                                         // 400
  UNAUTHORIZED = 'Unauthorized',                                       // 401
  FORBIDDEN = 'Forbidden',                                             // 403
  NOT_FOUND = 'Not Found',                                             // 404
  METHOD_NOT_ALLOWED = 'Method Not Allowed',                           // 405
  NOT_ACCEPTABLE = 'Not Acceptable',                                   // 406
  REQUEST_TIMEOUT = 'Request Timeout',                                 // 408
  CONFLICT = 'Conflict',                                               // 409
  GONE = 'Gone',                                                       // 410
  LENGTH_REQUIRED = 'Length Required',                                 // 411
  PRECONDITION_FAILED = 'Precondition Failed',                         // 412
  PAYLOAD_TOO_LARGE = 'Payload Too Large',                             // 413
  URI_TOO_LONG = 'URI Too Long',                                       // 414
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',                   // 415
  EXPECTATION_FAILED = 'Expectation Failed',                           // 417
  I_AM_A_TEAPOT = 'I’m a teapot',                                      // 418 (RFC 2324)
  UPGRADE_REQUIRED = 'Upgrade Required',                               // 426
  PRECONDITION_REQUIRED = 'Precondition Required',                     // 428
  TOO_MANY_REQUESTS = 'Too Many Requests',                             // 429
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large', // 431
  INTERNAL_SERVER_ERROR = 'Internal Server Error',                     // 500
  NOT_IMPLEMENTED = 'Not Implemented',                                 // 501
  BAD_GATEWAY = 'Bad Gateway',                                         // 502
  SERVICE_UNAVAILABLE = 'Service Unavailable',                         // 503
  GATEWAY_TIMEOUT = 'Gateway Timeout',                                 // 504
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',           // 505
}

export type TStandardError =
  | EStandardError.BAD_REQUEST
  | EStandardError.UNAUTHORIZED
  | EStandardError.FORBIDDEN
  | EStandardError.NOT_FOUND
  | EStandardError.METHOD_NOT_ALLOWED
  | EStandardError.NOT_ACCEPTABLE
  | EStandardError.REQUEST_TIMEOUT
  | EStandardError.CONFLICT
  | EStandardError.GONE
  | EStandardError.LENGTH_REQUIRED
  | EStandardError.PRECONDITION_FAILED
  | EStandardError.PAYLOAD_TOO_LARGE
  | EStandardError.URI_TOO_LONG
  | EStandardError.UNSUPPORTED_MEDIA_TYPE
  | EStandardError.EXPECTATION_FAILED
  | EStandardError.I_AM_A_TEAPOT
  | EStandardError.UPGRADE_REQUIRED
  | EStandardError.PRECONDITION_REQUIRED
  | EStandardError.TOO_MANY_REQUESTS
  | EStandardError.REQUEST_HEADER_FIELDS_TOO_LARGE
  | EStandardError.INTERNAL_SERVER_ERROR
  | EStandardError.NOT_IMPLEMENTED
  | EStandardError.BAD_GATEWAY
  | EStandardError.SERVICE_UNAVAILABLE
  | EStandardError.GATEWAY_TIMEOUT
  | EStandardError.HTTP_VERSION_NOT_SUPPORTED;
