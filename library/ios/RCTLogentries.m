#import "RCTLogentries.h"
#import "lelib/lelib.h"

@interface RCTLogentries()

@property (nonatomic) LELog* log;

@end

@implementation RCTLogentries

RCT_EXPORT_MODULE();

@synthesize log = _log;

- (LELog *) log {
    if (!_log) {
        _log = [LELog sharedInstance];
        _log.debugLogs = false;
    }
    return _log;
}

RCT_EXPORT_METHOD(setToken:(NSString *)token) {
    [self.log setToken:token];
}

RCT_EXPORT_METHOD(log:(NSString *)data) {
    [self.log log:data];
}

RCT_EXPORT_METHOD(setDebugLogs:(BOOL)debug) {
    self.log.debugLogs = debug;
}


@end
